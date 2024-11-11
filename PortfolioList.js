import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PortfolioList({ userId }) {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${userId}/portfolios`)
      .then(response => {
        setPortfolios(response.data);
      })
      .catch(error => {
        console.error("Error fetching portfolios:", error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Your Portfolios</h2>
      <ul>
        {portfolios.map(portfolio => (
          <li key={portfolio.id}>
            <h3>{portfolio.name}</h3>
            <p>Total Value: ${portfolio.totalValue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioList;
