
import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Choose from '../components/Choose';
import News from '../components/News';
import Founder from '../components/Founder';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';


const Home = () => {
    return (
        <div>
          <HeroSection/>
          <Services/>
          <Choose/>
          <News/>
          <Founder/>
          <Testimonial/>
          <Pricing/>
        </div>
    );
};

export default Home;