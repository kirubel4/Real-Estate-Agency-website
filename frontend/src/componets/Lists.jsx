import React, { useState } from 'react';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io"; 
import { useNavigate } from "react-router-dom";

function Lists(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    description: '',
    type: '',
    status: ''
  });
  const [photos, setPhotos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setPhotos(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    for (let i = 0; i < photos.length; i++) {
      data.append('photos', photos[i]); // Must match the backend field name
    }

    try {
      const res = await axios.post('http://localhost:5000/houses', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('House uploaded successfully!');
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Something went wrong. Please check the console.');
    }
  };

  return (
    <>
    <div className="rounded cursor-pointer" onClick={()=>{navigate(-1)}}>
          <IoIosArrowBack size={35} className="bg-slate-300 rounded-full hover:scale-90"/>
    </div>


    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="file"
        name="photos"
        multiple
        onChange={handleFileChange}
        className="w-full p-2"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default Lists;
