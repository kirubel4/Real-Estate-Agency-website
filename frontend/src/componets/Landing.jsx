import React, { useState, useEffect } from "react";
import home from "../assets/pexels-binyaminmellish-106399.jpg";
import home2 from "../assets/pexels-expect-best-79873-323780.jpg"
import home3 from "../assets/pexels-expect-best-79873-323781.jpg";

function Landing(){
    const images = [home,home2, home3];
    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setIsFading(false); 
            }, 100);
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="lg:flex lg:flex-row-reverse space-y-9 transition-opacity p-3">
            <div className="flex-1 h-full flex-center ">
                <img src={images[currentImage]} alt="Home" className={` rounded-lg animate-float transition-opacity duration-500 ease-in-out ${
                        isFading ? "opacity-0" : "opacity-100"
                    }`}/>
            </div>
            <div className="flex-1">
                <h1 className="text-3xl font-black md:text-4xl dark:text-white">Ayele Real Estate Agency</h1>
                <div className= "py-4">
                    <p className="dark:text-white font-medium md:text-lg mt-4 text-gray-700 leading-relaxed max-w-md text-center ">
                    we believe in turning your dreams into reality. Whether you're buying or selling, we offer a seamless experience, built on trust, care, and expertise. Let us guide you in finding the perfect home where your next chapter begins. Together, we’ll make your vision come to life.
                    </p>
                </div>

            </div>  
        </div>
    )
}
export default Landing;