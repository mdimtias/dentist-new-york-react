import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const {user} = useContext(AuthContext)
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking =event=>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
   
    const booking = {
      appointmentDate: date, 
      treatment: treatmentName,
      patient: name,
      slot, 
      email,
      price,
      phone
    }

    fetch("https://doctors-portal-client-server-developertanbir-gmailcom.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        console.log(data)
      toast.success("Booking Confirmed")
      refetch()
      setTreatment(null)
      }else{
        toast.error(data.message)
        setTreatment(null)
      }
    })
    
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
          <input
              type="text"
              value={date}
              disabled
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i)=><option key={i} value={slot}>{slot}</option>)}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Name"
              className="input w-full input-bordered"
            />
            <input
            name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input w-full input-bordered"
            />
            <input
            name="phone"
              type="text"
              placeholder="Phone"
              className="input w-full input-bordered"
            />
            <input type="submit" className="btn btn-accent w-full" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
