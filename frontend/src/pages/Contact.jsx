import React from "react";
import Nav from "../componets/Nav";
import Footer from "../componets/Footer";
import DarkModeToggle from "../componets/DarkMode";
import Contacts from "../componets/Contacts";
function Contact(){
    return(
        <div className="h-screen w-full">
            {/* <Nav /> */}
            <Contacts />
            {/* <Footer /> */}
            <DarkModeToggle />
            
        </div>
    )
}
export default Contact;
;