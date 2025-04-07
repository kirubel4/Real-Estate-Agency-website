import Cards from "./Cards";
import React, { useState, useEffect } from "react";
import Axios from "axios";
function Property(){
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
        <div className="py-5">
            <div className="flex py-3">
                <h1 className="text-6xl underline text-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">Properties</h1>
            </div>
            <Cards className="mb-5" images={images} data={data}/>
        </div>
    )
}
export default Property;