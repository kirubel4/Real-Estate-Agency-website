function Services(){
    return(
        <div className="w-full px-4 py-10 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 dark:text-white">Our Real Estate Services</h1>
        <p className="text-lg text-gray-600 mb-16 dark:text-white">
          We offer a variety of real estate services to help you buy, sell, or rent properties with ease.
        </p>
        
        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Property Buying Assistance */}
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-black border-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Property Buying Assistance</h3>
            <p className="text-gray-600 mb-4 dark:text-white">
              We guide you through the entire home-buying process, helping you find the perfect property at the best price. Our experts are with you every step of the way.
            </p>
          </div>

          {/* Property Selling Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-black border-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Property Selling Services</h3>
            <p className="text-gray-600 mb-4 dark:text-white">
              We assist you in listing your property, offering pricing advice, and managing viewings. We strive to get the best price for your property in the shortest time.
            </p>
          </div>

          {/* Rental Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-black border-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Rental Services</h3>
            <p className="text-gray-600 mb-4 dark:text-white">
              Whether you’re looking for a short-term or long-term rental, we help you find the perfect place to call home. We also assist landlords in finding reliable tenants.
            </p>
          </div>

          {/* Property Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-black border-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Property Management</h3>
            <p className="text-gray-600 mb-4 dark:text-white">
              We offer comprehensive property management services, including rent collection, maintenance, and tenant communication. Let us take the stress out of owning property.
            </p>
          </div>

          {/* Real Estate Consultation */}
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-black border-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Real Estate Consultation</h3>
            <p className="text-gray-600 mb-4 dark:text-white">
              Need advice on your next investment or buying your first home? Our experienced consultants offer expert market analysis and guidance to help you make informed decisions.
            </p>
          </div>

          {/* Area & Neighborhood Guides */}
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-black  border-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Area & Neighborhood Guides</h3>
            <p className="text-gray-600 mb-4 dark:text-white">
              We provide detailed guides on various neighborhoods to help you choose the perfect location. From schools to amenities, we provide all the insights you need.
            </p>
          </div>

          {/* Legal Support (via partners) */}
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-black border-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Legal Support</h3>
            <p className="text-gray-600 mb-4 dark:text-white">
              Our trusted legal partners offer support with title deeds, contracts, and other real estate legalities. We ensure your transactions are secure and worry-free.
            </p>
          </div>

        </div>
      </div>
    </div>
    )
}
export default Services;
