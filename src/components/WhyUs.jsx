import { FaBoxOpen, FaShieldAlt, FaLeaf } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-pink-600 font-bold text-3xl mb-2">Why Us</h2>
          <h1 className="text-2xl font-bold mb-4">Our Commitment to Quality</h1>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4 space-y-2 md:space-y-0">
              <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 md:mb-0">
                <FaBoxOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Wide Product Range</h3>
                <p>
                  We offer an extensive range of products to meet all your healthcare needs,
                  <br /> from prescription medications to over-the-counter solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4 space-y-2 md:space-y-0">
              <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 md:mb-0">
                <FaShieldAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Quality Assurance</h3>
                <p>
                  Our products are sourced from reputable manufacturers, <br /> ensuring the highest quality and safety standards.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4 space-y-2 md:space-y-0">
              <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 md:mb-0">
                <FaLeaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Eco-Friendly Practices</h3>
                <p>
                  We are committed to sustainability,
                  <br /> implementing eco-friendly practices in our operations and packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 max-w-lg mx-auto bg-gray-800 rounded-lg h-64 md:h-80 lg:h-96 flex items-center justify-center order-2 md:order-1">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/OfrQKxL2St0?si=TeQ0qN3vt1N6lo4A"
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
