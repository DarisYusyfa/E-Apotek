import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden mx-3">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <img src="/public/logo.png" alt="Logo" className="h-8 w-8" />
          <div>
            <span className="text-blue-700 text-xl font-bold">MEDIKA NUSANTARA</span>
            <span className="text-gray-500 text-sm block">E-Pharmacy</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-700">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-700">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-700">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-700">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-700">
            Contact Us
          </a>
        </div>
        <div className="hidden md:block">
          <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800">
            Belanja Sekarang →
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 px-6">
          <a href="#" className="block text-gray-700 hover:text-blue-700 py-2">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-700 py-2">
            About Us
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-700 py-2">
            Products
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-700 py-2">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-700 py-2">
            Contact Us
          </a>
          <a href="#" className="block bg-blue-700 text-white px-4 py-2 rounded-full text-center mt-2 hover:bg-blue-800">
            Belanja Sekarang →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
