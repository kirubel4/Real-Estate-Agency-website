import React from "react";
import Nav from "../componets/Nav";
import Footer from "../componets/Footer";
import DarkModeToggle from "../componets/DarkMode";
import Services from "../componets/Services";
function Service(){
    return(
        <>
        <Nav />
        <Services />
        <Footer/>
        <DarkModeToggle />
        </>
        

    )
}
export default Service;
