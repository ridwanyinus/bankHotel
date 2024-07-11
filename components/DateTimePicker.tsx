"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

interface DateTimePickerProps {
  buttonText: string;
  notificationTitle: string;
  notificationMessage: string;
  notificationButtonText: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ buttonText, notificationTitle, notificationMessage, notificationButtonText }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowNotification(true);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-lg mx-auto border border-gray-300 rounded-lg bg-gray-50 pb-2">
      {!showNotification && (
        <>
          <div className="w-full mb-4">
            <h3 className="text-lg font-semibold mb-2">CHOOSE DATE</h3>
            <DatePicker selected={selectedDate} onChange={(date: Date | null) => setSelectedDate(date)} inline className="w-full" />
          </div>
          <div className="w-full mb-4">
            <h3 className="text-lg font-semibold mb-2">CHOOSE TIME</h3>
            <TimePicker onChange={(value: string | null) => setSelectedTime(value)} value={selectedTime} disableClock className="w-full" />
          </div>
          <button className="w-full py-2 mt-4 bg-primary text-white-100 font-semibold rounded hover:bg-[#28332D]" onClick={handleButtonClick}>
            {buttonText}
          </button>
        </>
      )}

      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold mb-2">{notificationTitle}</h1>
            <p className="mb-4">{notificationMessage}</p>
            <button className="px-4 py-2 bg-primary text-white-100 font-semibold rounded hover:bg-[#28332D]" onClick={handleNotificationClose}>
              {notificationButtonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
