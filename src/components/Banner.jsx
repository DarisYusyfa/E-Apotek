const Banner = () => {
  return (
    <div className="bg-blue-100 p-10 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="text-pink-600 text-lg font-bold">MEDIKA NUSANTARA</h1>
          <h2 className="text-4xl font-bold my-4">Your Trusted Pharmacy Store</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus.</p>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="bg-black h-6 w-6 rounded-full"></div>
              <div className="bg-black h-6 w-6 rounded-full"></div>
              <div className="bg-black h-6 w-6 rounded-full"></div>
              <div className="bg-black h-6 w-6 rounded-full"></div>
            </div>
            <div>
              <p className="text-pink-600 text-lg font-bold">100k+</p>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img src="/public/banner1.png" alt="Pharmacy Products" className="max-w-full rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
