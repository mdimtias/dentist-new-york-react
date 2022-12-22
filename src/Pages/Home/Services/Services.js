import React from 'react';
import serviceOne from './../../../assets/Services/serviceOne.svg';
import serviceTwo from './../../../assets/Services/serviceTwo.svg';
import serviceThree from './../../../assets/Services/serviceThree.svg';
import serviceFour from './../../../assets/Services/serviceFour.svg';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='services_section'>
            <div className="container mx-auto">
                <div className="service-header py-8">
                    <h3 className='text-lg my-2 font-bold text-[#01CFC9]'>We Provide</h3>
                    <h2 className='text-3xl my-2 font-bold'>Available Treatment</h2>
                </div>
                <div className="services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 lg:px-0">
                    <div className="service text-center p-5">
                        <div className="img my-5 flex justify-center flex-column">
                            <img src={serviceOne} alt="" />
                        </div>
                        <h2 className='text-xl font-bold my-5'>Dental Bonding</h2>
                        <p className='text-justify'>Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile.</p>
                    </div>
                    <div className="service text-center p-5">
                        <div className="img my-5 flex justify-center flex-column">
                            <img src={serviceTwo} alt="" />
                        </div>
                        <h2 className='text-xl font-bold my-5'>Dental Crowns</h2>
                        <p className='text-justify'>A dental crown is a dental prosthesis which replaces the visible part of a tooth. A dental crown functions to strengthen teeth</p>
                    </div>
                    <div className="service text-center p-5">
                        <div className="img my-5 flex justify-center flex-column">
                            <img src={serviceThree} alt="" />
                        </div>
                        <h2 className='text-xl font-bold my-5'>Cosmetic Fillings</h2>
                        <p className='text-justify'>Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles.</p>
                    </div>
                    <div className="service text-center p-5">
                        <div className="img my-5 flex justify-center flex-column">
                            <img src={serviceFour} alt="" />
                        </div>
                        <h2 className='text-xl font-bold my-5'>Teeth Cleanings</h2>
                        <p className='text-justify'>You should visit the dentist every six months for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth.</p>
                    </div>
                </div>
                <div className="services_btn pt-8">
                    <Link to="./appointment"><button className="btn-style">Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;