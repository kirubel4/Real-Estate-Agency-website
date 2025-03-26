import Cards from "./Cards";
import BrokerPerformanceChart from "./Chart";
function NewHouse({data,images}){

    return(
        <div className="py-5">
            <div className="flex py-3">
                <h1 className="text-6xl underline text-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">New Arrivals</h1>
            </div>
            <Cards className="mb-5" images={images} data={data}/>
            <div className="lg:flex sm:block">
                <div className="lg:flex-1">
                    <BrokerPerformanceChart />
                    </div>
                    <div className="lg:flex-1">
                        <p className="justify-cente py-20 w-auto ml-4 align-center h-auto dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum fugiat, nihil quas obcaecati qui. Necessitatibus aliquid, illum sed dolores tempora, porro, nisi minima neque debitis dolorum alias explicabo amet.</p>
                    </div>
                
            </div>
        </div>
    )
}

export default NewHouse;