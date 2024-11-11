import React, { useState } from 'react';

function PortfolioForm({ addPortfolio }) {
  const [portfolioName, setPortfolioName] = useState('');
  const [totalValue, setTotalValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPortfolio({ name: portfolioName, totalValue: parseFloat(totalValue) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Portfolio</h2>
      <label>Portfolio Name:</label>
      <input type="text" value={portfolioName} onChange={(e) => setPortfolioName(e.target.value)} required />

      <label>Total Value:</label>
      <input type="number" value={totalValue} onChange={(e) => setTotalValue(e.target.value)} required />

      <button type="submit">Add Portfolio</button>
    </form>
  );
}

export default PortfolioForm;
