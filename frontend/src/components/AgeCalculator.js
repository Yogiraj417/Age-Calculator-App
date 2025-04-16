import React, { useState } from 'react';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!day || !month || !year) return;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
      setAge('Invalid birthdate');
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthsList = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const yearsList = Array.from({ length: currentYear - 1899 }, (_, i) => 1900 + i);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">Age Calculator</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <select value={day} onChange={(e) => setDay(e.target.value)} className="p-2 border rounded">
          <option value="">Day</option>
          {days.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select value={month} onChange={(e) => setMonth(e.target.value)} className="p-2 border rounded">
          <option value="">Month</option>
          {monthsList.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)} className="p-2 border rounded">
          <option value="">Year</option>
          {yearsList.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <button onClick={calculateAge} className="bg-blue-600 text-white px-4 py-2 rounded w-full">Calculate Age</button>

      {age && typeof age === 'object' && (
        <div className="mt-4 text-center text-lg font-semibold text-green-700">
          You are {age.years} years, {age.months} months, and {age.days} days old.
        </div>
      )}

      {age === 'Invalid birthdate' && (
        <div className="mt-4 text-center text-red-600">Please select a valid birthdate.</div>
      )}
    </div>
  );
};

export default AgeCalculator;
