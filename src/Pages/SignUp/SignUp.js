import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ImgUpload } from "../../hooks/ImgUpload";

const SignUp = () => {
  const { user } = useContext(AuthContext);
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const signUpHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // Upload Image Server
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageUploadServer = await ImgUpload(formData);
    // User Data Object
    const userData = { name: name, email: email };

    // Create User Database
    const createUserDb = async (email) => {
      // await fetch(`http://localhost:5000/users/${email}`, {
      await fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", `bearer ${data.token}`);
        });
    };

    // Registration User
    createUser(email, password)
      .then(() => {
        updateUser(name, imageUploadServer).then(() => {
          createUserDb(email);
        });
        toast.success("Registration Successful");
      })

      .catch((err) => toast.error("Account Create Fail"));
  };
  return (
    <div className="d-flex justify-center items-center p-12">
      <form action="" onSubmit={signUpHandler}>
        <div className="p-2">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>

        <div className="p-2">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className="p-2">
          <input
            name="image"
            type="file"
            accept="image/*"
            className="file-input input-accent w-full max-w-xs"
          />
        </div>
        <div className="p-2">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div>
          <button type="submit" className="btn w-full max-w-xs">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
