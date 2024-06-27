const Promotions = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="bg-blue-100 p-8 rounded-lg shadow-md flex-1 mx-4 card">
          <h3 className="text-gray-700 text-sm font-bold mb-2">Big Promo</h3>
          <h2 className="text-3xl font-bold mb-4">
            Get an Extra{' '}
            <span className="text-blue-700">
              <br />
              50% Off
            </span>
          </h2>
          <p className="text-gray-600 mb-4">
            Enjoy massive savings on selected items.
            <br /> Limited time offer!
          </p>
        </div>
        <div className="bg-blue-700 text-white p-8 rounded-lg shadow-md flex-1 mx-4 card">
          <h2 className="text-lg mb-4">
            Take the discount for the first <br />
            shopping on our website
          </h2>
          <div className="text-4xl font-bold mb-4">30%</div>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
