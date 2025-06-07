import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚗 Welcome to AounGarage</h1>
      <p>Check your repair status, request insurance, view weekly offers, and book appointments.</p>
      <ul style={{ lineHeight: '2rem' }}>
        <li><Link to="/repair-status">🔍 Check Repair Status</Link></li>
        <li><Link to="/insurance-request">📝 Request Insurance</Link></li>
        <li><Link to="/offers">📢 Weekly Offers</Link></li>
        <li><Link to="/book-appointment">📅 Book Appointment</Link></li>
        <li><Link to="/admin">🔐 Admin Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
