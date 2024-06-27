import React from 'react';
import sanmolImg from '../assets/sanmol1.png';  // Sesuaikan jalur impor
import decolgenImg from '../assets/decol1.png'; // Sesuaikan jalur impor
import vitaminImg from '../assets/vitamin.png'; // Sesuaikan jalur impor

const products = [
  {
    name: 'Sanmol Forte 650 Mg',
    price: 'Rp.4500',
    originalPrice: 'Rp.6000',
    imgSrc: sanmolImg,
  },
  {
    name: 'Decolgen Tablet',
    price: 'Rp.3500',
    originalPrice: 'Rp.5000',
    imgSrc: decolgenImg,
  },
  {
    name: 'Vitamin C IPI 50 mg',
    price: 'Rp.8500',
    originalPrice: 'Rp.9000',
    imgSrc: vitaminImg,
  },
  {
    name: 'Sanmol Forte 650 Mg',
    price: 'Rp.4500',
    originalPrice: 'Rp.6000',
    imgSrc: sanmolImg,
  },
  {
    name: 'Decolgen Tablet',
    price: 'Rp.3500',
    originalPrice: 'Rp.5000',
    imgSrc: decolgenImg,
  },
  {
    name: 'Vitamin C IPI 50 mg',
    price: 'Rp.8500',
    originalPrice: 'Rp.9000',
    imgSrc: vitaminImg,
  },
  {
    name: 'Sanmol Forte 650 Mg',
    price: 'Rp.4500',
    originalPrice: 'Rp.6000',
    imgSrc: sanmolImg,
  },
  {
    name: 'Decolgen Tablet',
    price: 'Rp.3500',
    originalPrice: 'Rp.5000',
    imgSrc: decolgenImg,
  },
  {
    name: 'Vitamin C IPI 50 mg',
    price: 'Rp.8500',
    originalPrice: 'Rp.9000',
    imgSrc: vitaminImg,
  },
  {
    name: 'Sanmol Forte 650 Mg',
    price: 'Rp.4500',
    originalPrice: 'Rp.6000',
    imgSrc: sanmolImg,
  },
  {
    name: 'Decolgen Tablet',
    price: 'Rp.3500',
    originalPrice: 'Rp.5000',
    imgSrc: decolgenImg,
  },
  {
    name: 'Vitamin C IPI 50 mg',
    price: 'Rp.8500',
    originalPrice: 'Rp.9000',
    imgSrc: vitaminImg,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-pink-600 text-2xl font-bold">
            Featured <br />
            Pharmacy Essentials
          </h2>
          <button className="text-gray-500 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500 px-4 py-2 rounded">See All Products</button>
        </div>
        <p className="text-gray-500 mb-6">Explore our featured pharmacy essentials, carefully selected for your health and well-being.</p>
        <div className="slide-container">
          <div className="slide-wrapper">
            {products.map((product, index) => (
              <div key={index} className="flex-none w-60">
                <div className="border p-4 rounded-lg relative">
                  <img src={product.imgSrc} alt={product.name} className="mb-4 w-full" />
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center mb-1">
                    <span className="line-through text-gray-500 mr-2">{product.originalPrice}</span>
                    <span className="text-blue-500">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
