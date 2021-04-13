/* eslint-disable no-undef */
import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from "../../assets/images/chair.png";

const AppointmentMain = ({handleDateChange}) => {

    
    
  return (
    <section className="container">
      <div className="row align-items-center" style={{ height: "600px" }}>
        <div className="col-md-4 offset-md-1 header-main-left">
          <h1>APPOINTMENT</h1>
          <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
        </div>
        <div className="col-md-6">
          <img src={chair} className="img-fluid" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AppointmentMain;
