import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="w-full">
       <img
          src="https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381__340.jpg"
          className="rounded-lg shadow-2xl"
         alt=""/>
       </div>
        <div className="w-full">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
