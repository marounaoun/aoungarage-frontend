import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/repair-status" style={{ marginRight: '1rem' }}>Repair Status</Link>
      <Link to="/insurance-request" style={{ marginRight: '1rem' }}>Insurance Request</Link>
      <Link to="/offers" style={{ marginRight: '1rem' }}>Offers</Link>
      <Link to="/book-appointment" style={{ marginRight: '1rem' }}>Book Appointment</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
