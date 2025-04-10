import About from "./pages/about";
import Properties from "./pages/properties";
import Service from "./pages/service";
import Contact from "./pages/contact"
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
function App(){
  // const[data, setData] = useState({});
  // const [images, setImages] = useState([]);

  //   useEffect(() => {
  //       fetch("http://localhost:5000/images")
  //           .then(response => response.json())
  //           .then(data => setImages(data))
  //           .catch(error => console.error("Error fetching images:", error));
  //   }, []);
  // const getData = async()=>{
  //     const response = await Axios.get("http://localhost:5000/getdata");
  //     setData(response.data);
  // }

  // useEffect(()=>{
  //   getData();
  // },[]);
  return(
    <div className="p-4 xl:px-12 animate-fadeIn dark:bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    
  )
}
export default App;