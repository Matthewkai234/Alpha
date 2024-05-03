import React, { useState } from "react";
import "./style.css";

const DateSelector = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  return (
    <div>
      <label htmlFor="day">Day:</label>
      <select id="day" value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Select Day</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <label htmlFor="month">Month:</label>
      <select id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Select Month</option>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <label htmlFor="year">Year:</label>
      <select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
