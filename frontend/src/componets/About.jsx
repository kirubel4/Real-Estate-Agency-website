import React from "react";
import photo from "../assets/logo.png";
import photo2 from "../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import photo1 from "../assets/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"
import photo4 from "../assets/sonnie-hiles-DhFHtkECn7Q-unsplash.jpg"
function AboutElement(){
    return(
        <div className="h-auto w-full">
            <div className="text-center dark:text-white">
                <p>Ayele Agency is a trusted real estate partner committed to helping people buy, sell, and invest in valuable properties with confidence and ease. Founded on strong values of integrity, professionalism, and hard work, Ayele Agency has earned a reputation for delivering outstanding service and building long-term client relationships. Our team works tirelessly to 
                    connect clients with the right homes and investment opportunities, offering expert advice and handling every step of the real estate process with care and transparency. With years of experience and a deep understanding of the local market, we are proud to play a role in turning real estate dreams into reality. We are continuously growing, expanding our services, 
                    and improving our approach to better serve our community. At Ayele Agency, we believe that real estate is not just about properties — it's about people, futures, and building lasting success together. Whether you are buying your first home, investing in a property, or planning for the future, Ayele Agency is here to guide you every step of the way</p>
            </div>
            <div>
                <div className="flex h-auto w-full border-2 lg:h-auto lg:w-1/2 mt-9 mb-9 rounded-xl">
                    <div className="block lg:flex">
                        <img src={photo} className="w-56 h-auto border-2 rounded-full border-blue-300" />
                        <div className="ml-6">
                            <p className="dark:text-white"><strong>NAME</strong> : <strong>Ayele kebede</strong></p>
                            <p className="dark:text-white"><strong>Founder and CEO</strong></p>
                            <p className="text-left dark:text-white">Ayele Kebede, Founder and CEO of Ayele Agency, brings over 25 years of experience in the real estate industry.
                                 His leadership, deep market knowledge, and commitment to client satisfaction have made Ayele Agency a trusted name for property sales, investments, and real estate solutions.</p>
                            
                        </div>
                    </div>
                </div>

                <div className="flex h-auto w-full border-2 lg:h-auto lg:w-1/2 mt-9 mb-9 rounded-xl lg:relative left-[50%] ">
                    <div className="block lg:flex">
                        <img src={photo} className="w-56 h-auto border-2 rounded-full border-blue-300" />
                        <div className="ml-6">
                            <p className="dark:text-white"><strong>NAME</strong> : <strong>Kirube ayele</strong></p>
                            <p className="dark:text-white"><strong>Agent and Manager</strong></p>
                            <p className="text-left dark:text-white">Kirubel Ayele serves as the Agent and Manager at Ayele Agency, combining strong negotiation skills with a deep understanding of the local real estate market. 
                                With a focus on delivering excellent service, he helps clients find the best opportunities and ensures smooth transactions from start to finish.</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <p className="lg:text-4xl text-xl text-center text-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">Happines Comes After Safty</p>
                    <div className="block mt-8 justify-around mb-7  md:flex ">
                        <div className="mt-5 md:mr-5">
                            <img src={photo1} className="w-80 h-48 "/>
                        </div>
                        <div className="mt-5 md:mr-5">
                            <img src={photo2} className="w-80 h-48 "/>
                        </div>
                        <div className="mt-5 md:mr-5">
                            <img src={photo4} className="w-80 h-48 "/>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default AboutElement;