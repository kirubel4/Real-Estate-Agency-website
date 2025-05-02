import React from "react"
import Nav from "../componets/Nav";
import Landing from "../componets/Landing";
import NewHouse from "../componets/NewHouses";
import Footer from "../componets/Footer";
import {useState, useEffect} from "react";
import DarkModeToggle from "../componets/DarkMode";

function HomePage(){
  const [image, setImage] = useState([]);

  
      useEffect(()=>{
          fetch("http://localhost:5000/api/houses")
          .then(response => response.json())
          .then(data => setImage(data))
          .catch(error => console.error("Error fetching images:", error))
      },[])
  return(
    <div className=" dark:bg-black">
      
        <Nav />
        <Landing />
        <NewHouse images={image} />
        <Footer />
        <DarkModeToggle />
    </div>
    
  )
}
export default HomePage;