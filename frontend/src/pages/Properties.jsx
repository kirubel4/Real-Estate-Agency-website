import React from "react";
import Nav from "../componets/Nav";
import Footer from "../componets/Footer";
import DarkModeToggle from "../componets/DarkMode";
import Property from "../componets/Property.jsx";
function Properties(){
    return(
        <>
            <Nav />
            <Property />
            <Footer />
            <DarkModeToggle />
        </>
        
    )
}
export default Properties;
;