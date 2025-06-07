import React, { useState } from 'react';
import { checkRepairStatus } from '../api';

export default function RepairStatusPage() {
  const [plate, setPlate] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    try {
      const data = await checkRepairStatus(plate, code);
      setStatus(data.status);
      setError(null);
    } catch (err) {
      setStatus(null);
      setError('Status not found');
    }
  };

  return (
    <div>
      <h2>Check Repair Status</h2>
      <input value={plate} onChange={(e) => setPlate(e.target.value)} placeholder="Plate Number" />
      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Tracking Code" />
      <button onClick={handleCheck}>Check</button>
      {status && <p>Status: {status}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
