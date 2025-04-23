import {useEffect, useState} from react;
import { useParams } from 'react-router-dom';

function ItemDetail(){
    const {id} = useParams();
    const [item,setItems] = useState(null);

    useEffect(()=>{
        const fetch = async()=>{
            try{
                const resp = await fetch(`/items/${id}`);
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
        fetch();
    },[id]);
    return(
        // <>
        //     <div className="py-7">
        //         {/* <div className="block bg-[#d8c4b6] p-4 rounded-lg shadow-lg">
        //             {/* Display all photos */}
        //             <div className="flex justify-center mb-4">
        //             {item.photos.map((photo, index) => (
        //                 <img
        //                 key={index}
        //                 src={`data:image/jpeg;base64,${photo}`} // Assuming base64 encoded
        //                 className="h-64 w-full object-cover rounded-md mb-4"
        //                 alt={`Photo ${index + 1}`}
        //                 />
        //             ))}
        //             </div>
        //             <h2 className="text-gray-700 text-xl">Type: <strong>{item.type}</strong></h2>
        //             <p className="text-gray-700">ADDRESS: <strong>{item.address}</strong></p>
        //             <p className="text-gray-700">STATUS: <strong>{item.status}</strong></p>
        //             <p className="text-gray-700">PRICE: <strong>{item.price}</strong></p>
        //             <p className="text-gray-700">DESCRIPTION: <strong>{item.description}</strong></p>
        //         </div> */}
        //     </div>
        // </>
        <p>hiiiiiiiiiiiiiiiiiiiiiiiiii</p>
    )
}
export default ItemDetail;