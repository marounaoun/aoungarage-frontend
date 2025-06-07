import React, { useState } from 'react';
import { submitInsurance } from '../api';

export default function InsurancePage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('bodily injury');
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    if (!frontFile || !backFile) {
      setError('Please upload both front and back images.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('phone', phone);
    formData.append('type', type);
    formData.append('registration_card_front', frontFile);
    formData.append('registration_card_back', backFile);

    try {
      await submitInsurance(formData);
      setSuccess(true);
      setFullName('');
      setPhone('');
      setType('bodily injury');
      setFrontFile(null);
      setBackFile(null);
    } catch (err) {
      setError('Submission failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Request New Insurance</h2>
      <form onSubmit={handleSubmit}>

        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Insurance Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="bodily injury">Bodily Injury</option>
          <option value="third-party liability">Third-Party Liability</option>
        </select>

        <label>Upload Registration Card - Front:</label>
        <input
          type="file"
          onChange={(e) => setFrontFile(e.target.files[0])}
          required
        />

        <label>Upload Registration Card - Back:</label>
        <input
          type="file"
          onChange={(e) => setBackFile(e.target.files[0])}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>

      {success && <p style={{ color: 'green' }}>Request submitted successfully ✅</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
