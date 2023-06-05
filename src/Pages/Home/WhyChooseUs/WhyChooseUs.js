import React from 'react';
import doctorChoose from './../../../assets/DentistStudio/doctor-why-choose-us.jpg';
import CircleIcon from './CircleIcon';

const WhyChooseUs = () => {
    return (
        <div className='why-choose-us'>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex justify-center items-center py-10">
                        <img src={doctorChoose} className="rounded-xl" alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-left">
                        <h3 className="font-md text-black font-semibold text-left">--About Us</h3>
                        <h2 className='font-bold text-3xl text-black mb-4 text-left'>Why Choose Us</h2>
                        <p className="text-lg text-black">We are providing the best medical service online and offline for you. Here you can appoint some experience and qualified doctors.</p>
                        </div>
                        <div className='text-left mt-6 w-full'>
                            <ul>
                                <li className="text-md font-medium text-black"><CircleIcon></CircleIcon> 24/7 medical service through online and offline</li>
                                <li className="text-md font-medium text-black"><CircleIcon></CircleIcon> Easy and flexible to appoints a doctor.</li>
                                <li className="text-md font-medium text-black"><CircleIcon></CircleIcon> Using modern technology to diagnostic disease</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;