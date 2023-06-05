import React from 'react';
import DentalStudio from '../DentalStudio/DentalStudio';
import ExpertDentist from '../ExpertDentist/ExpertDentist';
import Faq from '../Faq/Faq';
import HeroSection from '../HeroSection/HeroSection';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Subscribe from '../../SharedPage/Subscribe/Subscribe';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Services></Services>
            <DentalStudio></DentalStudio>
            <ExpertDentist></ExpertDentist>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <Faq></Faq>
        </>
    );
};

export default Home;