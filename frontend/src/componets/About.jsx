import React from "react";
import photo from "../assets/logo.png";
import photo2 from "../assets/photo_2_2025-03-13_22-06-30.jpg";
import photo1 from "../assets/photo_1_2025-03-13_22-06-30.jpg"
import photo4 from "../assets/photo_4_2025-03-13_22-06-30.jpg"
function AboutElement(){
    return(
        <div className="h-auto w-full">
            <div className="text-center dark:text-white">
                <p>Lorem ipsum dolor sit amet perferendis error inventore, delectust, cumque quod hic incidunt fugiat error corporis maiores. Voluptatum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum repudiandae perferendis error inventore, delectus maiores at atque. Odit totam fugit, cumque quod hic incidunt fugiat error corporis maiores. Voluptatum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum repudiandae perferendis error inventore, delectus maiores at atque. Odit totam fugit, cumque quod hic incidunt fugiat error corporis maiores. Voluptatum!</p>
            </div>
            <div>
                <div className="flex h-auto w-full border-2 lg:h-auto lg:w-1/2 mt-9 mb-9 rounded-xl">
                    <div className="block lg:flex">
                        <img src={photo} className="w-56 h-auto border-2 rounded-full border-blue-300" />
                        <div className="ml-6">
                            <p className="dark:text-white"><strong>NAME</strong> : <strong>Ayele kebede</strong></p>
                            <p className="dark:text-white"><strong>Founder and CEO</strong></p>
                            <p className="text-left dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim dicta quidem voluptates sed. Illum possimus in vel sunt ipsum aspernatur non provident dicta placeat amet quia, atque sequi quidem?</p>
                            
                        </div>
                    </div>
                </div>

                <div className="flex h-auto w-full border-2 lg:h-auto lg:w-1/2 mt-9 mb-9 rounded-xl lg:relative left-[50%] ">
                    <div className="block lg:flex">
                        <img src={photo} className="w-56 h-auto border-2 rounded-full border-blue-300" />
                        <div className="ml-6">
                            <p className="dark:text-white"><strong>NAME</strong> : <strong>Kirube ayele</strong></p>
                            <p className="dark:text-white"><strong>Agent and Manager</strong></p>
                            <p className="text-left dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim dicta quidem voluptates sed. Illum possimus in vel sunt ipsum aspernatur non provident dicta placeat amet quia, atque sequi quidem?</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <p className="lg:text-4xl text-xl text-center text-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">Happines Comes After Safty</p>
                    <div className="block mt-8 justify-around mb-7  md:flex ">
                        <div className="mt-5 md:mr-5">
                            <img src={photo1} className=""/>
                        </div>
                        <div className="mt-5 md:mr-5">
                            <img src={photo2}/>
                        </div>
                        <div className="mt-5 md:mr-5">
                            <img src={photo4}/>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default AboutElement;