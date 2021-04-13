import React, { useState } from 'react';
import AppointmentsList from './AppointmentsList';
import DashboardCalender from './DashboardCalender';
import Sidebar from './Sidebar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        // setSelectedDate(date);
        console.log(date);
    }
    return (
        <main>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                        
                    </div>
                    <div className="col-md-4">
                    <DashboardCalender   handleDateChange={handleDateChange} />
                    </div>
                    <div className="col-md-5">
                        <AppointmentsList />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;