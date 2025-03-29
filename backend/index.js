import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import pg from "pg";
import dotenv from 'dotenv';
import multer from "multer";


const app =  express();
const port = 5000;
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


app.get("/getdata", (req,res)=>{

    const data = {
        name:"kirubel",
        price:20000000,
        depart: "se"
    }
    res.send(data);
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

app.listen(port,()=>{
    console.log(`Sesrver is running on port ${port}`)
});
