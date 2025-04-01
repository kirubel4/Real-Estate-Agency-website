import React from "react"
import Nav from "../componets/Nav";
import Landing from "../componets/Landing";
import NewHouse from "../componets/NewHouses";
import Footer from "../componets/Footer";
import {useState, useEffect} from "react";
import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 
import Axios from "axios";
import About from "../pages/about";
import Properties from "../pages/properties";
import Service from "../pages/service";
import Contact from "../pages/contact"
import {Routes, Route } from "react-router-dom";
import DarkModeToggle from "../componets/DarkMode";

function HomePage(){
  const[data, setData] = useState({});
  const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/images")
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error("Error fetching images:", error));
    }, []);
  const getData = async()=>{
      const response = await Axios.get("http://localhost:5000/getdata");
      setData(response.data);
  }

  useEffect(()=>{
    getData();
  },[]);


  useEffect(()=>{
      const isDarkMode = localStorage.getItem("isDarkMode")
      if(isDarkMode === "true"){
        window.document.documentElement.classList.add("dark")
      }
    },[])
  const toggleDarkMode = () => {
    const isDark = window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", isDark);
    
  };
  return(
    <div className=" dark:bg-black">
      
        <Nav />
        <Routes>
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Landing />
        <NewHouse images={images} data={data} />
        <Footer />

        {/* Dark mode toggle button */}
        <DarkModeToggle />
    </div>
    
  )
}
export default HomePage;