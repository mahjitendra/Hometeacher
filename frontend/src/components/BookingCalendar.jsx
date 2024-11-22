import React, { useState } from "react";
import { Calendar } from "@mui/x-date-pickers";

const BookingCalendar = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (onDateSelect) onDateSelect(date);
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Book Your Session</h2>
            <Calendar
                value={selectedDate}
                onChange={handleDateChange}
                disablePast
            />
        </div>
    );
};

export default BookingCalendar;
