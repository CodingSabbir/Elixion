
import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Choose from '../components/Choose';
import News from '../components/News';
import FounderCard from '../components/FounderCard';
import Pricing from '../components/Pricing';

const Home = () => {
    return (
        <div>
          <HeroSection/>
          <Services/>
          <Choose/>
          <News/>
          <FounderCard/>
          <Pricing/>
        </div>
    );
};

export default Home;