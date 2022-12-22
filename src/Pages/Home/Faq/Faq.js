import React from "react";
import './Faq.css';
const Faq = () => {
  return (
    <div className="faq_section bg-[#EEFBFA] py-6">
      <div className="container mx-auto">
        <div className="faq-header pb-10">
          <h3 className="uppercase text-lg text-[#01CFC9] mb-2">Faq</h3>
          <h3 className="text-[#0F2650] text-5xl font-bold">Frequently Asked Question</h3>
        </div>
        <div className="faq pb-10 px-5">
          <div
            tabIndex={0}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
             What is Teeth Cleanings?
            </div>
            <div className="collapse-content">
              <p>
              This is by far the most common reason people visit the dentist. Many dentists recommend a cleaning every six months, and some recommend once a year. Either way, it’s a very important part of oral health. Your own toothbrush will never be as efficient as the tools a dentist uses to clean your teeth.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Teeth Whitening?
            </div>
            <div className="collapse-content">
              <p>
              Like cleaning, whitening is a relatively discomfort-less process. Some people are sensitive to the whitening agents used, but otherwise it’s an easy procedure that most dental offices can do. At home teeth whitening kits involve a lot of extra time and effort. You need to buy kits and spend a lot of time.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Dentures?
            </div>
            <div className="collapse-content">
              <p>
              Dentures are usually associated with ageing, but a lot of people may need dentures. They are meant to replace teeth in a natural way, and they’re typically removable. Fitting for dentures is very common, and it takes a while. In the end, it’s worth it to have a full set of working teeth again.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Extractions
            </div>
            <div className="collapse-content">
              <p>
              Extractions sound scary and painful. Admittedly, they are not the most pleasant of procedures. However, your dentist will do everything in their power to help you feel comfortable. You may need an extraction for any number of reasons. <br /> When having a tooth pulled, you’ll likely be either unconscious or thoroughly numbed. You won’t be able to feel a thing! You may be sore afterwards, but extractions are almost always to prevent further pain.
              </p>
            </div>
          </div>
          <div
            tabIndex={4}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Bonding?
            </div>
            <div className="collapse-content">
              <p>
              This is another way to repair damaged or chipped teeth. It involves a resin – a sort of plastic – that your dentists tints to match the natural shade of your teeth. It’s less invasive than some other methods, especially for smaller imperfections. Several layers are needed to really secure the resin, and a light is used to “dry” each layer. The spot is then polished and cleaned so it fits naturally into the tooth. It’s an easy procedure, but can take a little while.
              </p>
            </div>
          </div>
          <div
            tabIndex={5}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Veneers?
            </div>
            <div className="collapse-content">
              <p>
              If your teeth are crooked or discoloured, your dentist might recommend veneers. These are very popular solutions to common tooth problems. It’s essentially a thin covering placed over the front section of a tooth or set of teeth. They’re mainly used for correctional purposes, but they can be used for whitening, too. The process is simple and painless for most people, and it’s easy for dentists to perform.
              </p>
            </div>
          </div>
          <div
            tabIndex={6}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Fillings?
            </div>
            <div className="collapse-content">
              <p>
              Cavities are all too common and all too easy to get. For most cavities, a filling is the recommended answer. Acids in food and inside your body can easily break down tooth enamel if overexposed. <br /> Luckily, filling most cavities is a quick procedure. You’ll likely be numbed, which can last for a few hours after the filling is over. It usually takes about an hour to finish up, and then it’s good as new! You might feel pressure while they’re working, but it shouldn’t be painful.
              </p>
            </div>
          </div>
          <div
            tabIndex={7}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Crowns?
            </div>
            <div className="collapse-content">
              <p>
              If your cavity is a little too big for a filling, or the top part of your tooth has decayed, a crown is the solution. These are usually two-visit procedures, but like the filling, shouldn’t be overtly painful. Your dentist will take a molding of your tooth so that a lab can craft a properly fitted crown to cover the decayed area. <br /> Some offices have “printers” in office. They use a special x-ray and computer combination to take photos and craft a crown right then and there! The second visit will involve fitting and securing the crown, which is usually quite fast and painless.
              </p>
            </div>
          </div>
          <div
            tabIndex={8}
            className="collapse collapse-plus collapse-plus-bg-black border border-[#01CFC9] bg-base-100 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is Root Canal?
            </div>
            <div className="collapse-content">
              <p>
              This is one that most people dread, and for fair reasons. Root canals are usually preceded by some pretty awful tooth pain. A root canal means the tissue inside or under your tooth is infected and inflamed. To get rid of the pain, the dentist needs to deaden the nerve and remove the tissue. Sometimes you may need to take an antibiotic before the procedure. <br /> The good thing is that you’ll be numbed before it happens, so you won’t feel any pain, just pressure. Once the procedure is over – and it can take a few hours – you’ll be numb for a while, but hopefully pain free since the infection will be gone.
              </p>
            </div>
          </div>
          <div className="faq-btn pt-8">
            <button className="btn-style">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
