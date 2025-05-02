import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import pg from "pg";
import dotenv from 'dotenv';
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from 'nodemailer';


const app =  express();
const port = process.env.port || 5000;
dotenv.config();

const connect = process.env;
const db = new pg.Client({
    user: connect.DB_USER,
    host: connect.DB_HOST,
    database: connect.DB_NAME,
    password: connect.DB_PASSWORD,
    port: 5432,
});
db.connect();

const storage = multer.memoryStorage();
const upload = multer({storage});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"))


app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Create reusable transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // your email (can be same as user)
      subject: 'New Contact Form Message',
      html: `
        <h3>New Message from Website Contact Form</h3>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.get("/images", async (req, res) => {
    try {
        const result = await db.query("SELECT id, image_name, image_data FROM images");

        if (result.rows.length > 0) {
            const images = result.rows.map(row => ({
                id: row.id,
                image_url: `data:image/jpeg;base64,${row.image_data.toString("base64")}`,
                image_name:row.image_name,
            }));

            res.json(images);
        } else {
            res.status(404).json({ error: "No images found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});



app.post("/upload", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      const { originalname, buffer } = req.file;
      console.log(`Uploading file: ${originalname}`);
  
      const query = "INSERT INTO images (image_name, image_data) VALUES ($1, $2) RETURNING *";
      const values = [originalname, buffer];
  
      const result = await db.query(query, values);
      console.log("Database insert result:", result);
  
      res.status(200).json({
        message: "Image uploaded successfully",
        image: result.rows[0],
      });
    } catch (error) {
      console.error("Error during file upload:", error);
      res.status(500).json({
        message: "Failed to upload image",
        error: error.message,
        stack: error.stack, 
     });
    }
  });

  app.post('/houses', upload.array('photos'), async (req, res) => {
    const { title, location, price, description,type,status } = req.body;
    const files = req.files;
  
    try {
      const result = await db.query(
        `INSERT INTO houses (title, location, price, description,type,status)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
        [title, location, price, description,type,status]
      );
  
      const houseId = result.rows[0].id;
  
      for (const file of files) {
        await db.query(
          `INSERT INTO photos (house_id, photo) VALUES ($1, $2)`,
          [houseId, file.buffer]
        );
      }
  
      res.status(201).json({ message: 'House and photos uploaded successfully' });
    } catch (err) {
      console.error('Error creating house:', err);
      res.status(500).json({ error: 'Upload failed' });
    }
  });
  
  // Get all houses with their images as base64
  app.get('/api/houses', async (req, res) => {
    try {
      const result = await db.query(`
        SELECT h.*, 
        json_agg(encode(p.photo, 'base64')) AS photos
        FROM houses h
        LEFT JOIN photos p ON h.id = p.house_id
        GROUP BY h.id
      `);

      res.json(result.rows);
    } catch (err) {
      console.error('Error fetching houses:', err);
      res.status(500).json({ error: 'Failed to fetch houses' });
    }
  });

 // Get one house by ID with all its photos (base64)
 app.get('/detail/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const houseResult = await db.query(
      `SELECT * FROM houses WHERE id = $1`,
      [id]
    );

    if (houseResult.rows.length === 0) {
      return res.status(404).json({ error: 'House not found' });
    }

    const house = houseResult.rows[0];

    const photoResult = await db.query(
      `SELECT encode(photo, 'base64') AS photo FROM photos WHERE house_id = $1`,
      [id]
    );

    house.photos = photoResult.rows.map(row => row.photo);

    res.json(house);
  } catch (err) {
    console.error('Error fetching house by ID:', err);
    res.status(500).json({ error: 'Failed to fetch house' });
  }
});


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// ✅ Catch-all route: for React Router to handle client-side routes like /detail/:id
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port,()=>{
    console.log(`Sesrver is running on port ${port}`)
});
