import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <div className="hero py-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <img
          src="https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381__340.jpg"
          className="rounded-lg shadow-2xl"
         alt=""/>
         <div>
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
            ></DayPicker>
            <p>You have selected {format(selectedDate, 'PP')}</p>
         </div>
      </div>
    </div>
    );
};

export default AppointBanner;