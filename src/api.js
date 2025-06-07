const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

// 🔧 REPAIRS
export async function checkRepairStatus(plateNumber, trackingCode) {
  const res = await fetch(`${API_BASE}/repairs/status?plate_number=${plateNumber}&tracking_code=${trackingCode}`);
  if (!res.ok) throw new Error('Status not found');
  return await res.json();
}

// 🔧 CLIENTS
export const getAllClients = async () => {
  const res = await fetch(`${API_BASE}/clients`);
  if (!res.ok) throw new Error('Failed to fetch clients');
  return await res.json();
};

// 🔧 INSURANCE
export const submitInsurance = async (formData) => {
  const res = await fetch(`${API_BASE}/insurance`, {
    method: 'POST',
    body: formData
  });
  if (!res.ok) throw new Error('Failed to submit insurance');
  return await res.json();
};

// 🔧 OFFERS
export const getOffers = async () => {
  const res = await fetch(`${API_BASE}/offers`);
  if (!res.ok) throw new Error('Failed to fetch offers');
  return await res.json();
};

// 🔧 BOOKINGS
export const bookAppointment = async (bookingData) => {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookingData)
  });
  if (!res.ok) throw new Error('Failed to book appointment');
  return await res.json();
};
