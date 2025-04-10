import React from "react";
import photo from "../assets/logo.png"
function AboutElement(){
    return(
        <div className="h-auto w-full">
            <div className="text-center dark:text-white">
                <p>Lorem ipsum dolor sit amet perferendis error inventore, delectust, cumque quod hic incidunt fugiat error corporis maiores. Voluptatum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum repudiandae perferendis error inventore, delectus maiores at atque. Odit totam fugit, cumque quod hic incidunt fugiat error corporis maiores. Voluptatum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum repudiandae perferendis error inventore, delectus maiores at atque. Odit totam fugit, cumque quod hic incidunt fugiat error corporis maiores. Voluptatum!</p>
            </div>
            <div>
                <div className="flex border-2 h-auto w-1/2 mt-9 mb-9 rounded-xl">
                    <div className="flex">
                        <img src={photo} className="w-56 h-auto border-2 rounded-full border-blue-300" />
                        <div className="ml-6">
                            <p className="dark:text-white"><strong>NAME</strong> : <strong>Ayele kebede</strong></p>
                            <p className="dark:text-white"><strong>Founder and CEO</strong></p>
                            <p className="text-left dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim dicta quidem voluptates sed. Illum possimus in vel sunt ipsum aspernatur non provident dicta placeat amet quia, atque sequi quidem?</p>
                            
                        </div>
                    </div>
                </div>

                <div className="flex border-2 h-auto w-1/2 mt-9 mb-9 rounded-xl relative left-[50%] ">
                    <div className="flex">
                        <img src={photo} className="w-56 h-auto border-2 rounded-full border-blue-300" />
                        <div className="ml-6">
                            <p className="dark:text-white"><strong>NAME</strong> : <strong>Kirube ayele</strong></p>
                            <p className="dark:text-white"><strong>Agent and Manager</strong></p>
                            <p className="text-left dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim dicta quidem voluptates sed. Illum possimus in vel sunt ipsum aspernatur non provident dicta placeat amet quia, atque sequi quidem?</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default AboutElement;