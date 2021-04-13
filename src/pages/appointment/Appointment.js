import React from 'react';
import { useState } from 'react';
import Navbar from '../shared/Navbar';
import AppointmentMain from './AppointmentMain';
import BookAppointment from './BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    
    return (
        <div>
            <Navbar />
            <AppointmentMain handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate} />
        </div>
    );
};

export default Appointment;