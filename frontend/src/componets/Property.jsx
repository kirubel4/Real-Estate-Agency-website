import Cards from "./Cards";
import React, { useState, useEffect, use } from "react";
import Axios from "axios";
function Property(){
    const [image, setImage] = useState([]);
    const [info, setInfo] = useState({})
    
    useEffect(()=>{
        fetch("http://localhost:5000/api/houses")
        .then(response => response.json())
        .then(data => setImage(data))
        .catch(error => console.error("Error fetching images:", error))
    },[])
    
    return(
        <div className="py-5">
            <div className="flex py-3">
                <h1 className="text-6xl underline text-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">Properties</h1>
            </div>
            <Cards className="mb-5" images={image}/>
        </div>
    )
}
export default Property;