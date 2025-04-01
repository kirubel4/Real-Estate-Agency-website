import Footer from "./Footer";
import DarkModeToggle from "./DarkMode";
import houseImage from "../assets/pexels-thgusstavo-2102587.jpg";
import Landing from "./Landing";
function Contacts(){
    return (
        <div>
            <div className="flex m-5 justify-between">
                <div className=" bg-slate-500 h-96 w-full mr-2 ">
                   
                    <p>alkdsjflakjsdflkasjlfdjkalskfjlaskfjlasjkdfla</p>
                </div>
                <div className="h-96 w-full">
                <img src={houseImage} alt="House" className="h-96 w-96"/>

                </div>
            </div>
        </div>
        
    )
}
export default Contacts;