import { BiPhone } from "react-icons/bi"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsLinkedin } from "react-icons/bs"; 
import { AiOutlineMail } from "react-icons/ai"; 
import logo  from "../assets/logo2-removebg-preview.png";
function Footer(){
    return(
                <div className="bg-gray-50 dark:bg-black dark:border-3 border-gray-300 p-4 dark:border-white">
                    <div className="lg:flex block space-x-13 w-full">
                        <div className="w-auto">
                            <div className=" bg-gray-50 justify-centerblock rounded-full border-4 border-blue-400 h-32 w-32">
                                <img src={logo} className="w-full h-full object-cover"/>
                            </div>
                            <div className="max-w-md mt-0">
                                <p className="leading-relaxed text-left text-gray-600 lg:text-2xl text-md p-4 text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">
                                    Turning Dreams into Addresses – Your Trusted Real Estate Partner!
                                </p>
                                </div>
                        </div>
                        <div className="space-x-4">
                            <h2 className="lg:text-2xl text-2lg text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">Service</h2>
                            <ul className="py-4 dark:text-white">
                                <li>✔ Property Selling Services</li>
                                <li>✔ Home Buying Assistance </li>
                                <li>✔ Legal & Documentation Support </li>
                                <li>✔ Real Estate Consultation </li>
                                <li>✔ Rental Management </li>
                                <li>✔ Property Valuation</li>
                            </ul>
                        </div>
                        <div className="space-x-14">
                            <h2 className="px-6 lg:text-2xl text-2lg text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">Contact</h2>
                            <ul>
                                <li className="dark:text-white py-2"><a href="mailto: kirubelayele2127@gmail.com"><AiOutlineMail size={25}/></a></li>
                                <li className="dark:text-white py-2"><a href="https://www.linkedin.com/in/kirubel-ayele-b88a58263/"><BsLinkedin size={25}/></a></li>
                                <li className="dark:text-white py-2"><a href="https://t.me/kiraklaus"><AiOutlineInstagram size={25}/></a></li>
                                <li className="dark:text-white py-2"><BiPhone size={25}/>+251-977-32-52-96</li>
                            </ul>
                        </div>
                    </div>
                </div>
        ) 
    }
    export default Footer;