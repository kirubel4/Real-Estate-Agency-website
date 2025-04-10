function Cards({images}) {
    return (
        <div className="py-7 justify-between mt-10 grid gap-y-8 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {images.map((item) => {
                return ( 
                    <div key={item.id} className="block bg-[#d8c4b6] h-auto w-80 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-opacity">
                        <div className="block p-2 rounded-lg ">
                            <div className="flex justify-center mb-1">
                                <img src={`data:image/jpeg;base64,${item.photos[0]}`} className="h-48 w-full object-cover rounded-md" />
                            </div>
                            <div className="h-auto">
                                <h2 className="text-gray-700">Type: <strong>kirubel</strong></h2>
                                <p className="text-gray-700">ADDRESS: <strong>addis ababa</strong></p>
                                <p className="text-gray-700">STATUS: <strong>for sell</strong></p>
                                <p className="text-gray-700">PRICE: <strong>29999999</strong></p>
                                <div className="p-3">
                                    <button className="bg-[#654520] text-white px-4 py-2 text-sm rounded cursor-pointer hover:bg-[#654520] hover:text-lg active:scale-90 transition-transform duration-200">
                                        Details                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
