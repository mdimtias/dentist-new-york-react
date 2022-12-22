import React from 'react';
import doctor from './../../../assets/Hero/doctor.png';
import phone from './../../../assets/Hero/phone.svg';
import location from './../../../assets/Hero/location.svg';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero_section">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="hero_content text-left px-5 lg:px-0">
                        <h1 className='text-3xl font-black my-5'>Make your Teeth Cleanings appointment with our consultants</h1>
                        <p> A dentist is a person who is qualified to examine and treat people's teeth. Visit your dentist twice a year for a check-up. The dentist or the dentist's is used to refer to the surgery or clinic where a dentist works. </p>
                        <Link to="./appointment"><button className='btn-style my-5'>Book Now</button></Link>
                        <div className="hero-contact-info flex justify-between my-5 gap-5">
                            <div className="hero_phone flex gap-3">
                            <div className="hero_phone_img">
                                    <img src={phone} alt="Phone" />
                            </div>
                            <div className="hero_phone_text text-sm text-[##0F2650]">
                                    <p>Telephone</p>
                                    <p>+880154521</p>
                            </div>
                            </div>
                            <div className="hero-address flex gap-3">
                                <div className="hero-address-img">
                                    <img src={location} alt="Location" />
                                </div>
                                <div className="hero-address-text text-sm text-[##0F2650]">
                                    <p>347 L’Enfant Plaza SW WASHINGTON DC</p>
                                    <p>20260-6500 USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero_image flex justify-center items-center">
                        <img src={doctor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;