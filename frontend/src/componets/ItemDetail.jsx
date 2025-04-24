import { IoIosArrowBack } from "react-icons/io"; 
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ItemDetail(){
    const {id} = useParams();
    const [item,setItems] = useState(null);
    
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchItem = async()=>{
            try{
                const resp = await fetch(`/detail/${id}`);
                if(resp.ok){
                    const data = await resp.json();
                    setItems(data);
                    
                }else{
                    console.log("error in item(is not found)")
                }

            }catch(error){
                console.error('Error fetching item details:', error);
            }
        };
        fetchItem();
    },[id]);
    if (!item) return <p>Loading...</p>;
    return(
        <>
            <div className="rounded cursor-pointer" onClick={()=>{navigate(-1)}}>
                <IoIosArrowBack size={35} className="bg-slate-300 rounded-full hover:scale-90"/>
            </div>
            <div className="py-7">
      {/* Title and Description */}
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Type: <strong>{item.type}</strong></h1>
      <p className="text-lg text-gray-600 mt-2 dark:text-white">Description: <strong>{item.description}</strong></p>
      
      {/* Location, Price, and Status */}
      <div className="mt-4">
        <p className="text-gray-700 dark:text-white">Location: <strong>{item.location}</strong></p>
        <p className="text-gray-700 dark:text-white">Price: <strong>${item.price}</strong></p>
        <p className="text-gray-700 dark:text-white">Status: <strong>{item.status}</strong></p>
      </div>
      
      {/* Photos List */}
      <div className="mt-6">
        <h2 className="text-xl font-medium text-gray-800">Photos</h2>
        <div className="flex flex-wrap mt-4 gap-4">
        {item.photos && item.photos.map((photo, index) => (
  <img
    key={index}
    src={`data:image/jpeg;base64,${photo}`}
    alt={`Photo ${index + 1}`}
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-48 object-cover rounded-md"
  />
))}
        </div>
      </div>
    </div>
        </>
        
    )
}
export default ItemDetail;