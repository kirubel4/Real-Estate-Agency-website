import React from "react"
import Nav from "./componets/Nav";
import Landing from "./componets/Landing";
import NewHouse from "./componets/NewHouses";
import Footer from "./componets/Footer";
import {useState, useEffect} from "react";
import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 
import Axios from "axios";
function App(){
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
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-black" >
      <Nav />
      <Landing />
      <NewHouse images={images} data={data}/>
      
      <Footer />
        <div className="fixed bottom-4 right-4 bg-gray-200 rounded-full hover:scale-105 active:scale-75">
              <button onClick={toggleDarkMode} className="shadow-lg bg-black px-4 py-3 rounded-full text-white dark:bg-white dark:text-black active:bg-106 ">
                <BiSun className="hidden dark:block"/>
                <BiMoon className="dark:hidden"/>
              </button>  
        </div>
    </div>
    
  )
}
export default App;