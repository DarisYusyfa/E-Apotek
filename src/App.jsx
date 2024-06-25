import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Promotions from './components/Promotions';
import FeaturedProducts from './components/FeaturedProducts';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Promotions />
      <FeaturedProducts />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default App;
