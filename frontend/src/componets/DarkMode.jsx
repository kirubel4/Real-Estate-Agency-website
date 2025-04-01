import {useState, useEffect} from "react";
import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 

const DarkModeToggle = ()=>{
    const storedThem = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedThem);

    useEffect(()=>{
        if (theme === "dark"){
            document.documentElement.classList.add("dark");

        }else{
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme",theme)
    },[theme]);
    
    const toggleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      };
    return (
        <div className="fixed bottom-4 right-4 bg-gray-200 rounded-full hover:scale-105 active:scale-75">
            <button onClick={toggleDarkMode} className="shadow-lg bg-black px-4 py-3 rounded-full text-white dark:bg-white dark:text-black active:bg-106">
                <BiSun className="hidden dark:block" />
                <BiMoon className="dark:hidden" />
            </button>
        </div>
    )
}
export default DarkModeToggle;