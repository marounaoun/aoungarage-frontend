// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RepairStatusPage from './pages/RepairStatusPage';
import InsurancePage from './pages/InsurancePage'; // ✅ adjust path if different
import WeeklyOffersPage from './pages/WeeklyOffersPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repair-status" element={<RepairStatusPage />} />
        <Route path="/insurance-request" element={<InsurancePage />} />
        <Route path="/weekly-offers" element={<WeeklyOffersPage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
