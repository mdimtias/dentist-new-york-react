import React from 'react';
const Subscribe = () => {
    return (
        <div className='subscribe bg-[#03054D]'>
            <div className="container mx-auto px-5">
                <div className="py-20 subscribe">
                    <h2 className="text-3xl font-bold text-[#01CFC9] mb-5">
                        Subscribe to our newsletter
                    </h2>
                    <div className="px-5">
                        <input
                            type="text"
                            placeholder="Please Write your email"
                            className="input input-bordered input-accent w-full mb-5 max-w-xs mr-5"
                        />
                        <button className="btn-style">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;