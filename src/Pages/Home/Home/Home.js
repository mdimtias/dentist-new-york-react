import React from 'react';
import DentalStudio from '../DentalStudio/DentalStudio';
import ExpertDentist from '../ExpertDentist/ExpertDentist';
import Faq from '../Faq/Faq';
import HeroSection from '../HeroSection/HeroSection';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Services></Services>
            <DentalStudio></DentalStudio>
            <ExpertDentist></ExpertDentist>
            <Faq></Faq>
            <Reviews></Reviews>
        </>
    );
};

export default Home;