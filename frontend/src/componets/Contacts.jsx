import Footer from "./Footer";
import DarkModeToggle from "./DarkMode";
import houseImage from "../assets/pexels-thgusstavo-2102587.jpg";
import Landing from "./Landing";
function Contacts(){
    return (
        <div className="h-auto w-full">
            <div className="flex m-5 justify-between ">
                <div className=" bg-slate-100 h-auto w-full mr-4 mb-7 ">
                   
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
                        <div className="w-full text-center md:w-1/2">
                            <h1 className="text-3xl font-bold text-gray-800">Ayele Real Estate Agency</h1>
                                <p className="text-gray-600 mt-2 text-lg">
                            Let's Make Your Dream Home a Reality – Get in Touch!
                            </p>
                            <form className="space-y-4">
                        <div>
                          <label className="block font-medium text-gray-600" htmlFor="name">Full Name</label>
                          <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                          <label className="block font-medium text-gray-600" htmlFor="email">Email Address</label>
                          <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                          <label className="block font-medium text-gray-600" htmlFor="phone">Phone Number</label>
                          <input type="text" id="phone" name="phone" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                          <label className="block font-medium text-gray-600" htmlFor="message">Message</label>
                          <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none"></textarea>
                        </div>
                        <div>
                          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">Submit Inquiry</button>
                        </div>
                  </form>
                        </div>
                        
                    </div>
                    
                    
                </div>

                <div className="h-auto w-full mb-7">
                    <img src={houseImage} alt="House" className="h-auto w-full"/>
                </div>
            </div>
        </div>
        
    )
}
export default Contacts;