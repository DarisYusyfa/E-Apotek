import { useState } from 'react';
import CountUp from 'react-countup';
import bannerImg from '../assets/banner1.png'; // Sesuaikan jalur impor gambar

const Banner = () => {
  const [startCount, setStartCount] = useState(false);

  // Mengatur state untuk memulai animasi penghitungan angka
  const handleStart = () => {
    setStartCount(true);
  };

  return (
    <div className="bg-blue-100 p-10 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="text-pink-600 text-lg font-bold">MEDIKA NUSANTARA</h1>
          <h2 className="text-4xl font-bold my-4 text-glow">Your Trusted Pharmacy Store</h2>
          <p className="text-gray-600 mb-4">Providing quality healthcare products to meet all your medical needs. Trust us for reliable and affordable solutions.</p>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="rounded-full bg-black h-6 w-6 animate-running-light"></div>
              <div className="rounded-full bg-black h-6 w-6 animate-running-light"></div>
              <div className="rounded-full bg-black h-6 w-6 animate-running-light"></div>
              <div className="rounded-full bg-black h-6 w-6 animate-running-light"></div>
            </div>
            <div>
              {/* Menggunakan CountUp untuk animasi penghitungan angka */}
              <CountUp start={startCount ? 0 : null} end={8765} duration={3} separator=",">
                {({ countUpRef }) => <p className="text-pink-600 text-lg font-bold" ref={countUpRef} />}
              </CountUp>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img src={bannerImg} alt="Pharmacy Products" className="max-w-full rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
