//import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import PopularSection from '../PopularSection/PopularSection';
import TrandingSection from '../TrandingSection/TrandingSection';

const DynamicSection = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <PopularSection></PopularSection>
            <TrandingSection></TrandingSection>
        </div>
    );
};

export default DynamicSection;