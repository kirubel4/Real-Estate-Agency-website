import React from "react"
import Nav from "../componets/Nav";
import Landing from "../componets/Landing";
import NewHouse from "../componets/NewHouses";
import Footer from "../componets/Footer";
import {useState, useEffect} from "react";
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
  return(
    <div className=" dark:bg-black">
      
        <Nav />
        <Landing />
        <NewHouse images={images} data={data} />
        <Footer />
        <DarkModeToggle />
    </div>
    
  )
}
export default HomePage;