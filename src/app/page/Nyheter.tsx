import React from 'react';

const Nyheter = () => {
  return (
    <div className="nyheter-container">
      <div className="left">
        <img src="/path-to-your-image.jpg" alt="Nyheter" />
      </div>
      <div className="right">
        <h3>Avtalespesialister</h3>
        <p>Some text here...</p>
        <a href="/">Link</a>
      </div>
    </div>
  );
};

export default Nyheter;