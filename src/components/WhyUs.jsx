import { FaBoxOpen, FaShieldAlt, FaLeaf } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-pink-600 font-bold mb-2">Why Us</h2>
          <h1 className="text-3xl font-bold mb-4">Our Commitment to Quality</h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-4 rounded-lg">
                <FaBoxOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold">Wide Product Range</h3>
                <p>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit. Mauris tempus.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-4 rounded-lg">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold">Quality Assurance</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Mauris tempus.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-4 rounded-lg">
                <FaLeaf className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold">Eco-Friendly Practices</h3>
                <p>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit. Mauris tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 bg-gray-800 rounded-lg h-64 md:h-80 lg:h-96 flex items-center justify-center">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
