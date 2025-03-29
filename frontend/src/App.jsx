import About from "./pages/about";
import Properties from "./pages/properties";
import Service from "./pages/service";
import Contact from "./pages/contact"
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
function App(){
  
  return(
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    
  )
}
export default App;