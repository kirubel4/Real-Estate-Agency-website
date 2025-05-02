import About from "./pages/About";
import Properties from "./pages/properties";
import Service from "./pages/Service";
import Contact from "./pages/contact"
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ItemDetail from "./componets/ItemDetail";
import Lists from "./componets/Lists";
function App(){
  return(
    <div className="p-4 xl:px-12 animate-fadeIn dark:bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/Admin09" element={<Lists />} />
        </Routes>
    </div>
    
  )
}
export default App;