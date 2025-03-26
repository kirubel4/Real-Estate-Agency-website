import { GiHamburgerMenu } from "react-icons/gi";
import logo  from "../assets/pexels-binyaminmellish-106399-remove-preview.jpeg";
import { useState } from "react";
function Nav(){
    const Routes = [
        {name:"Home",path:"/"},
        {name:"Properties",path:"/properties"},
        {name:"About",path:"/about"},
        {name:"Services",path:"/services"},
        {name:"Contact",path:"/contact"}
    ]
    const [isMobileMenuShown,setIsMobileMenuShown] = useState(false);
    function handelMobileMenu(){
        setIsMobileMenuShown(!isMobileMenuShown)
    }
    return (
        <nav className="flex flex-wrap items-center justify-between p-4 bg-transparent">
            <a href="#">
                <img src={logo} className="h-24 w-24 lg:h-28 lg:w-28 rounded-full"/>
            </a>
            
            {/* Hamburger menu button, visible only on small screens */}
            <button onClick = {handelMobileMenu} className="lg:hidden hover:bg-gray-200 rounded-lg p-2 focus:ring-2 foucs:ring-gray-200 dark:bg-slate-200 dark:hover:scale-105 dark:active:scale-75">
                <GiHamburgerMenu size={30} />
            </button>

            {/* Navigation links container */}
            <div className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block py-4 `}>
                <ul className="flex flex-col lg:flex-row bg-gray-50 border border-gray-100 text-lg rounded-lg p-3 lg:bg-transparent lg:border-none lg:space-x-3 dark:bg-black">
                    {Routes.map(({name, path}) => (
                        <li className="py-2  dark:text-white " key={name}>
                            <a 
                                href={path} 
                                className="block w-full hover:underline hover:bg-gray-100 rounded-lg p-3 dark:hover:bg-white dark:hover:text-black"
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )        
}
export default Nav;