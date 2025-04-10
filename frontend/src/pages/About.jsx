import React from "react";
import Nav from "../componets/Nav";
import Footer from "../componets/Footer";
import DarkModeToggle from "../componets/DarkMode";
import AboutElement from "../componets/About";
function About(){
    return(
        <div>
            <Nav />
            <AboutElement />
            <Footer />
            <DarkModeToggle />
        </div>
        
    )
}
export default About;
