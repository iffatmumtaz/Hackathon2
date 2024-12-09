import React from 'react'


import AboutHero from '../components/aboutHero';
import AboutPopularProduct from '../components/aboutPopularProduct';
import AboutSection from '../components/aboutSection';



const page = () => {
    return (
      <div>
        <AboutHero/>
            <AboutSection/>
            <AboutPopularProduct/>
            
      </div>
    );
}

export default page