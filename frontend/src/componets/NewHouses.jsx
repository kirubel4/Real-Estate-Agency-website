import Cards from "./Cards";
import BrokerPerformanceChart from "./Chart";
function NewHouse({data,images}){

    return(
        <div className="py-5">
            <div className="flex py-3">
                <h1 className="text-6xl underline text-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">New Arrivals</h1>
            </div>
            <Cards className="mb-5" images={images} max_item={6}/>
            <div className="lg:flex sm:block">
                <div className="lg:flex-1">
                    <BrokerPerformanceChart />
                    </div>
                    <div className="lg:flex-1">
                        <p className="justify-cente py-20 w-auto ml-4 align-center h-auto dark:text-white">Ayele Agency is a growing real estate company committed to connecting clients with their ideal homes and investment properties. Through strategic marketing, 
                            professional brokerage services, and personalized customer support, Ayele Agency has steadily increased its profits year after year. The agency specializes in property sales, rentals, and advisory services, while actively expanding its portfolio of 
                            high-value listings across Addis Ababa and beyond. With a focus on trust, transparency, and excellent service, Ayele Agency continues to build strong relationships with buyers, sellers, and investors, ensuring sustainable growth and a positive reputation in the real estate market.</p>
                    </div>
                
            </div>
        </div>
    )
}

export default NewHouse;