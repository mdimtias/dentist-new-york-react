import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  const booking = useLoaderData();
  const { appointmentDate, treatment, slot, price } = booking;
  // const navigation = useNavigation();
  // if(navigation.state === "loading"){
  //     return <Loading></Loading>
  // }
  return (
    <div>
      <h2>Please Paid Payment For {treatment}</h2>
      <p>
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 py-10">
      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
      </Elements>
      </div>
    </div>
  );
};

export default Payment;
