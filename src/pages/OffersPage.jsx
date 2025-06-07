import React, { useEffect, useState } from 'react';
import { getOffers } from '../api';

export default function OffersPage() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers().then(setOffers).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Weekly Garage Offers</h2>
      {offers.length === 0 ? (
        <p>No current offers available.</p>
      ) : (
        <ul>
          {offers.map((offer) => (
            <li key={offer.id}>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <small>Valid Until: {offer.valid_until}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
