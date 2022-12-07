import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../SharedPage/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, "PP")
    console.log(date)
    const {data: appointmentOptions=[], isLoading, refetch} = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: async ()=>
            fetch(`http://localhost:5000/appointmentOptions?date=${date}` )
            .then(res=> res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch("http://localhost:5000/appointmentOptions")
    //     .then(res=>res.json())
    //     .then(data=>setAppointmentOptions(data))
    // },[])
    return (
        <div className="p-6">
            <p className='font-bold text-center'>Available Appointment on {format(selectedDate, "PP")}</p>

           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {appointmentOptions.map((option)=><AppointmentOption
                    key={option._id} 
                    appointmentOption={option}
                    setTreatment={setTreatment}
                ></AppointmentOption>)}
           </div>
           {treatment && <BookingModal refetch={refetch} treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;