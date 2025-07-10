import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const searchableData = [
  'Pharmacology',
  'Pharmaceutical Chemistry',
  'Pharmaceutics',
  'Clinical Pharmacy',
  'Pharmacovigilance',
  'Drug Regulatory Affairs',
  'Pharmacy Practice',
  'Pharmaceutical Analysis',
  'Human Anatomy & Physiology',
  'Organic Chemistry',
  'Biochemistry',
  'Pathophysiology',
  'Clinical Research Associate',
  'Hospital Pharmacy',
  'Blood Pressure Measurement',
  'Drug Discovery Process',
  'Pharmacology Certification'
];

const suggestions = [
  'Pharmacology',
  'Pharmaceutical Chemistry',
  'Pharmaceutics',
  'Clinical Pharmacy',
  'Pharmacovigilance',
  'Drug Regulatory Affairs',
  'Pharmacy Practice',
  'Pharmaceutical Analysis'
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [index, setIndex] = useState(0);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % suggestions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const results = searchableData.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  }, [searchTerm]);

  const handleClick = (item) => {
    alert(`Navigating to: ${item}`);
    // Add actual navigation if needed
  };

  return (
    <div className="search-container">
      <h1>Welcome! What Pharma Topic Would You Like to Learn?</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder={suggestions[index]}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      {filtered.length > 0 && (
        <div className="search-results">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="search-item"
              onClick={() => handleClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {searchTerm && filtered.length === 0 && (
        <div className="no-results">No results found for "{searchTerm}"</div>
      )}
    </div>
  );
};

export default SearchBar;
