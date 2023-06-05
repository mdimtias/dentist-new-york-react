import React from 'react';
import './ExpertDentist.css';
import doctorOne from './../../../assets/ExpertDoctor/doctorOne.png';
import doctorTwo from './../../../assets/ExpertDoctor/doctorTwo.png';
import doctorThree from './../../../assets/ExpertDoctor/doctorThree.png';
import doctorFour from './../../../assets/ExpertDoctor/doctorFour.png';
const ExpertDentist = () => {
    return (
        <div className='expert_dentist_section'>
            <div className="container mx-auto">
                <div className="expert-header">
                    <p className='text-[#01CFC9] text-lg uppercase mb-3'>Expert</p>
                    <h3 className='text-[#0F2650] text-5xl font-bold'>Our Dentist Specialist</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-28 px-5 lg:px-0 gap-5">
                    <div className="expert-doctor border rounded-2xl border-[#01CFC9] pb-5 mb-16 lg:mb-0">
                        <div className="expert-doctor-img">
                            <div className="expert-doctor-img-style rounded-full overflow-hidden">
                                <img src={doctorOne} alt="" />
                            </div>
                        </div>
                        <div className="expert-doctor-text">
                            <h2 className='text-black font-bold text-2xl'>Martina Gallo </h2>
                            <p className='text-xl'>Assistance</p>
                        </div>
                    </div>
                    <div className="expert-doctor border rounded-2xl border-[#01CFC9] pb-5 mb-16 lg:mb-0">
                        <div className="expert-doctor-img">
                            <div className="expert-doctor-img-style rounded-full overflow-hidden">
                                <img src={doctorTwo} alt="" />
                            </div>
                        </div>
                        <div className="expert-doctor-text">
                            <h2 className='text-black font-bold text-2xl'>Dr. Abbas Ali</h2>
                            <p className='text-xl'>Dental Bonding</p>
                        </div>
                    </div>
                    <div className="expert-doctor border rounded-2xl border-[#01CFC9] pb-5 mb-16 lg:mb-0">
                        <div className="expert-doctor-img">
                            <div className="expert-doctor-img-style rounded-full overflow-hidden">
                                <img src={doctorThree} alt="" />
                            </div>
                        </div>
                        <div className="expert-doctor-text">
                            <h2 className='text-black font-bold text-2xl'>Md Sayem</h2>
                            <p className='text-xl'>Dental Crowns</p>
                        </div>
                    </div>
                    <div className="expert-doctor border rounded-2xl border-[#01CFC9] pb-5 mb-16 lg:mb-0">
                        <div className="expert-doctor-img">
                            <div className="expert-doctor-img-style rounded-full overflow-hidden">
                                <img src={doctorFour} alt="" />
                            </div>
                        </div>
                        <div className="expert-doctor-text">
                            <h2 className='text-black font-bold text-2xl'>Dr. Karim Ali </h2>
                            <p className='text-xl'>Cosmetic Fillings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDentist;