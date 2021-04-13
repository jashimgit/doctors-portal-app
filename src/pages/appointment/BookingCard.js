import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const BookingCard = ({ booking, appointMentOn }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h3 className="card-title" style={{ color: "#1cc7c1" }}>
            {booking.subject}
          </h3>
          <h5 style={{ color: "#3a4256" }}>{booking.visitingHour}</h5>
          <p className="lead">{booking.totalSpace} SPACES AVAILABLE</p>
          <button onClick={openModal} className="btn info-primary">
            BOOK APPOINTMENT
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            title={booking.subject}
            appointMentOn={appointMentOn}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
