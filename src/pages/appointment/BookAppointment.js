import React from 'react';
import BookingCard from './BookingCard';

const BookAppointment = ({date}) => {
    const Bookings = [
        {
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 10
        },
        {
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:05 AM - 11:30 AM',
            totalSpace: 10
        },
        {
            id: 3,
            subject: 'Teeth Cleaning',
            visitingHour: '05:00 PM - 6:30 PM',
            totalSpace: 10
        },
        {
            id: 4,
            subject: 'Cavity Protection',
            visitingHour: '07:00 PM - 8:30 PM',
            totalSpace: 10
        },
        {
            id: 5,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 10
        },
        {
            id: 6,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 10
        }
    ]
    
  
    return (
        <section className="container">
            <h2 className="text-center my-4" style={{color: '#3a4256'}}>Available appointmens on {date.toDateString()} </h2>
            <div className="row">
                {
                    Bookings.map(booking => <BookingCard booking={booking} key={booking.id} appointMentOn={date} />)
                }
            </div>
        </section>
    );
};

export default BookAppointment;