import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-2xl font-bold">MEDIKA NUSANTARA</h1>
            <p className="text-lg">E-Pharmacy</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mr-8 mb-8 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Company</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog & News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Resources</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Educational
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Mental Health Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Nutrition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Medication Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTiktok size={24} />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; 2024 Medika Nusantara</p>
            <div className="space-x-4">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
