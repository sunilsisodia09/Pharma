import React from 'react';

const PharmaUnitPage = ({ title, content }) => {
  return (
    <div className="unit-page">
      <h2>{title}</h2>
      <p>{content.description}</p>
      <ul>
        {content.topics.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default PharmaUnitPage;
