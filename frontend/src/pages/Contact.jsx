import React from "react";
import Nav from "../componets/Nav";
import Footer from "../componets/Footer";
import DarkModeToggle from "../componets/DarkMode";
import Contacts from "../componets/Contacts";
function Contact(){
    return(
        <div className="h-auto w-full  dark:bg-black">
            <Nav />
            <Contacts />
            <Footer />
            <DarkModeToggle />
            
        </div>
    )
}
export default Contact;
;