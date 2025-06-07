import React, { useEffect, useState } from 'react';
import { getOffers } from '../api';

function WeeklyOffersPage() {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOffers()
      .then(data => setOffers(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="container">
      <h1>Weekly Garage Offers</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {offers.length === 0 ? (
        <p>No current offers.</p>
      ) : (
        <ul>
          {offers.map(offer => (
            <li key={offer.id}>
              <strong>{offer.title}</strong> — {offer.description} (Valid until {offer.valid_until})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WeeklyOffersPage;
