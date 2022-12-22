import React from 'react';
import clock from './../../../assets/DentistStudio/clock.svg';
import calender from './../../../assets/DentistStudio/calender.svg';
import doctorStdio from './../../../assets/DentistStudio/doctor-stdio.jpg';
import './DentalStudio.css';
const DentalStudio = () => {
    return (
        <div className='dental_studio_section'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 px-5 md:px-0">
                    <div className="studio-content">
                       <div className="studio-text text-left">
                            <h3 className='text-[24px] font-bold text-[#01CFC9] uppercase'>Dentist STUDIO</h3>
                            <h2 className='text-4xl text-black font-bold'>Denting Problem Solving</h2>
                            <p className='text-lg text-[rgba(0, 0, 0, 0.74)] my-5'>If there are a lot of young people in the area that your practice serves, it could be beneficial to have a pediatric dental specialist on-staff. The dental equivalent of pediatricians, pediatric dentists have specialized skill sets tailored toward caring for the oral health of children. They help provide specialized care for infants through teens.</p>
                       </div>

                        <div className="dentist-studio-items py-5">
                            <div className="dentist-studio-item flex gap-5 mb-5">
                                <div className="dentist-studio-img">
                                    <img src={clock} alt="" />
                                </div>
                                <div className='text-left'>
                                    <h2 className='text-2xl font-bold text-[#0F2650]'>Periodontal treatments</h2>
                                    <p>Periodontal treatmentsAnother valuable type of dental service to offer at your practice is periodontal treatments.</p>
                                </div>
                            </div>
                            <div className="dentist-studio-item flex gap-5">
                                <div className="dentist-studio-img">
                                    <img src={calender} alt="" />
                                </div>
                                <div className='text-left'>
                                    <h2 className='text-2xl font-bold text-[#0F2650]'>Orthodontic services</h2>
                                    <p className='text-lg text-[rgba(0, 0, 0, 0.74)]'>Orthodontic services help improve the alignment of the teeth and jaw. Patients who have an overbite</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="doctor_studio flex justify-center items-center">
                        <img src={doctorStdio} alt="Doctor Studio" />
                    </div>
                </div>
                <div className="studio_counter px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="counter bg-white py-5 rounded-2xl border-[#01CFC9] border">
                        <h3 className='text-black font-bold text-2xl'>1850</h3>
                        <p className='text-xl text-black'>Total Patient</p>
                    </div>
                    <div className="counter bg-white py-5 rounded-2xl border-[#01CFC9] border">
                        <h3 className='text-black font-bold text-2xl'>950</h3>
                        <p className='text-xl text-black'>Appointment</p>
                    </div>
                    <div className="counter bg-white py-5 rounded-2xl border-[#01CFC9] border">
                        <h3 className='text-black font-bold text-2xl'>15</h3>
                        <p className='text-xl text-black'>Expert Dentist </p>
                    </div>
                    <div className="counter bg-white py-5 rounded-2xl border-[#01CFC9] border">
                        <h3 className='text-black font-bold text-2xl'>08</h3>
                        <p className='text-xl text-black'>Already Booked</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalStudio;