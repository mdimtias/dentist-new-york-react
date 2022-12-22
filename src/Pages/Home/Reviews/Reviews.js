import React from "react";
import reviewOne from './../../../assets/Review/reviewOne.jpg';
import reviewTwo from './../../../assets/Review/reviewTwo.jpg';
import reviewThree from './../../../assets/Review/reviewThree.jpg';
import reviewFour from './../../../assets/Review/reviewFour.jpg';
const Reviews = () => {
  return (
    <div className="faq_section bg-[#EEFBFA] py-6 lg:pb-36">
      <div className="container mx-auto">
        <div className="review-header pb-10">
          <h3 className="uppercase text-lg text-[#01CFC9] mb-2">Review</h3>
          <h3 className="text-[#0F2650] text-5xl font-bold">
            Our Customer Review
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 md:px-0">
            <div className="review bg-white border rounded-2xl border-[#01CFC9] p-5">
                <div className="review-img pb-5 flex justify-center">
                    <img className="w-32 h-32 rounded-[50%]" src={reviewOne} alt="" />
                </div>
                <h2 className="text-xl font-bold text-[#0F2650] mb-4">Martin Bail</h2>
                <p className="text-justify">The professionalism and friendliness of the whole team is outstanding. I’ve been going with them for a complicated process and then for keeping up and cleaning. Every visit is like visiting friends. I couldn’t be happier with the results. </p>
                <div className="rating mt-5">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                </div>
            </div>
            <div className="review bg-white border rounded-2xl border-[#01CFC9] p-5">
                <div className="review-img pb-5 flex justify-center">
                    <img className="w-32 h-32 rounded-[50%]" src={reviewTwo} alt="" />
                </div>
                <h2 className="text-xl font-bold text-[#0F2650] mb-4">Martin Bail</h2>
                <p className="text-justify">The staff was great. Very welcoming and friendly. The dentist was very nice and informative. I call him (DN) because he made me feel right at home and as if I was a friend. He provided excellent service and I will be coming here for all my future dental needs! </p>
                <div className="rating mt-5">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                </div>
            </div>
            <div className="review bg-white border rounded-2xl border-[#01CFC9] p-5">
                <div className="review-img pb-5 flex justify-center">
                    <img className="w-32 h-32 rounded-[50%]" src={reviewThree} alt="" />
                </div>
                <h2 className="text-xl font-bold text-[#0F2650] mb-4">Martin Bail</h2>
                <p className="text-justify">Great office located directly in downtown (CN). The front desk staff makes you feel right at home immediately when you walk in the door. Everything was on time and it was an extremely professionally run office. A fantastic experience that is super easy for anyone that works downtown. </p>
                <div className="rating mt-5">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                </div>
            </div>
            <div id="item1" className="review bg-white border rounded-2xl border-[#01CFC9] p-5">
                <div className="review-img pb-5 flex justify-center">
                    <img className="w-32 h-32 rounded-[50%]" src={reviewFour} alt="" />
                </div>
                <h2 className="text-xl font-bold text-[#0F2650] mb-4">Martin Bail</h2>
                <p className="text-justify">This is a great place to go take care of your teeth. The team was very professional examining and providing with solutions by priority. I had to do periodontal root cleaning and (DN) did a great job, I felt that I was in good hands. All the people here were very gentle and kind to me. They explained very well what was going on. Thanks to (DN)! </p>
                <div className="rating mt-5">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
