import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 

const MyCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-container ">
      <Calendar
        onChange={setValue}
        value={value}
        className="custom-calendar bg-secondary"
      />
    </div>
  );
};

export default MyCalendar;
