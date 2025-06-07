import React, { useState } from 'react';
import { bookAppointment } from '../api';

export default function AppointmentPage() {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await bookAppointment({ client_name: clientName, phone, date });
      setStatus('success');
      setClientName('');
      setPhone('');
      setDate('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Book Now</button>
      </form>

      {status === 'success' && <p style={{ color: 'green' }}>✅ Appointment booked successfully!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>❌ Failed to book appointment.</p>}
    </div>
  );
}
