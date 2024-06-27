import { FaShippingFast, FaCreditCard, FaGift, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div className="flex flex-col items-center md:flex-row md:space-x-4 p-4 feature-item">
          <FaShippingFast className="text-blue-700 text-3xl mb-2 md:mb-0" />
          <div>
            <h3 className="text-lg font-bold">Free Shipping</h3>
            <p className="text-gray-600">Belanja lebih dari 500k</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-4 p-4 feature-item">
          <FaCreditCard className="text-blue-700 text-3xl mb-2 md:mb-0" />
          <div>
            <h3 className="text-lg font-bold">Quick Payment</h3>
            <p className="text-gray-600">100% Secure</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-4 p-4 feature-item">
          <FaGift className="text-blue-700 text-3xl mb-2 md:mb-0" />
          <div>
            <h3 className="text-lg font-bold">Big Cashback</h3>
            <p className="text-gray-600">Over 50% Cashback</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-4 p-4 feature-item">
          <FaHeadset className="text-blue-700 text-3xl mb-2 md:mb-0" />
          <div>
            <h3 className="text-lg font-bold">24/7 Support</h3>
            <p className="text-gray-600">Ready for You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
