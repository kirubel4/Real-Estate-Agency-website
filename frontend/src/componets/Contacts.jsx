import Footer from "./Footer";
import DarkModeToggle from "./DarkMode";
import houseImage from "../assets/pexels-thgusstavo-2102587.jpg";
import Landing from "./Landing";
function Contacts(){
    return (
        <div className="h-auto w-full ">
            <div className="flex m-5 justify-between ">
                <div className=" bg-slate-100 h-auto w-full mr-4 mb-7  dark:bg-black dark:sm:border-2">
                   
                    <div className="flex flex-col md:flex-row justify-center items-center  darK:p-6 sm:p-6">
                        <div className="w-full text-center md:w-1/2 ">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Ayele Real Estate Agency</h1>
                                <p className="text-gray-600 mt-2 text-lg dark:text-white">
                            Let's Make Your Dream Home a Reality – Get in Touch!
                            </p>
                            <form className="space-y-4">
                              <div>
                                <label className="block font-medium text-gray-600 dark:text-white" htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                  <label className="block font-medium text-gray-600 dark:text-white" htmlFor="email">Email Address</label>
                                  <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                  <label className="block font-medium text-gray-600 dark:text-white" htmlFor="phone">Phone Number</label>
                                  <input type="text" id="phone" name="phone" required className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                  <label className="block font-medium text-gray-600 dark:text-white" htmlFor="message">Message</label>
                                  <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none"></textarea>
                                </div>
                                <div>
                                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">Send</button>
                              </div>
                            </form>
                        </div>
                        
                    </div>
                    
                    
                </div>

                <div className="h-auto w-full mb-7 hidden md:flex">
                    <img src={houseImage} alt="House" className="h-auto w-full"/>
                </div>
            </div>
            <div>
              <h1 className=" md:text-4xl dark:text-white">You can contact us in person.</h1>
              <p className="ml-12 font-bold dark:text-white">alksdjfas,alsdfja;sldkf, aslkdjfalsjf, sdkljflsjf</p>
              <iframe
                  className="mt-6 mb-6 w-auto lg:w-1/2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.7578497378614!2d38.818436225679804!3d8.99949793980383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9acaf6238061%3A0xe842de7c974d0e43!2sGerji%2C%20Addis%20Ababa!5e1!3m2!1sen!2set!4v1744457119424!5m2!1sen!2set"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
        </div>
        
    )
}
export default Contacts;