import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const ResetPassword = () => {
    const {resetPassword} = useContext(AuthContext)
    const handleResetPassword = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email;
        console.log(email)
        resetPassword(email)
        .then(()=>{
            toast.success("Password Reset Link Send Your Email")
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div className="d-flex justify-center items-center p-12">
        <form action="" onSubmit={handleResetPassword}>
          <div className="p-2">
            <input
            name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
        </form>    
        </div>
    );
};

export default ResetPassword;