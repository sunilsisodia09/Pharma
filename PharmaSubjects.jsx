// PharmaSubjects.jsx
import React from 'react';
import './PharmaSubjects.css';

const bPharmSubjects = {
  '1st Year (B.Pharm)': [
    'Human Anatomy & Physiology',
    'Pharmaceutical Analysis',
    'Pharmaceutics',
    'Pharmaceutical Inorganic Chemistry',
    'Communication Skills',
    'Remedial Biology / Mathematics',
    'Pharmaceutical Chemistry',
    'Environmental Sciences',
  ],
  '2nd Year (B.Pharm)': [
    'Pharmaceutical Organic Chemistry',
    'Physical Pharmaceutics',
    'Pathophysiology',
    'Microbiology',
    'Pharmacognosy and Phytochemistry',
    'Community Pharmacy',
    'Pharmaceutical Engineering',
  ],
  '3rd Year (B.Pharm)': [
    'Pharmacology',
    'Pharmaceutical Jurisprudence',
    'Medicinal Chemistry',
    'Pharmaceutical Formulation',
    'Industrial Pharmacy',
  ],
  '4th Year (B.Pharm)': [
    'Biopharmaceutics & Pharmacokinetics',
    'Clinical Pharmacy',
    'Pharmacovigilance',
    'Project Work',
    'Pharmacy Practice',
  ],
};

const dPharmSubjects = {
  '1st Year (D.Pharm)': [
    'Pharmaceutics I',
    'Pharmaceutical Chemistry I',
    'Biochemistry & Clinical Pathology',
    'Human Anatomy & Physiology',
    'Health Education & Community Pharmacy',
  ],
  '2nd Year (D.Pharm)': [
    'Pharmaceutics II',
    'Pharmaceutical Chemistry II',
    'Pharmacology & Toxicology',
    'Pharmaceutical Jurisprudence',
    'Drug Store and Business Management',
    'Hospital and Clinical Pharmacy',
  ],
};

const PharmaSubjects = () => {
  const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const handleClick = (subject) => {
    const slug = slugify(subject);
    window.open(`/subject/${slug}?minimal=true`, '_blank');
  };

  return (
    <div className="subjects-container">
      <h1>B.Pharm Subjects</h1>
      {Object.entries(bPharmSubjects).map(([year, subjects]) => (
        <div key={year}>
          <h2>{year}</h2>
          <ul>
            {subjects.map((subject) => (
              <li key={subject}>
                <button onClick={() => handleClick(subject)}>{subject}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h1>D.Pharm Subjects</h1>
      {Object.entries(dPharmSubjects).map(([year, subjects]) => (
        <div key={year}>
          <h2>{year}</h2>
          <ul>
            {subjects.map((subject) => (
              <li key={subject}>
                <button onClick={() => handleClick(subject)}>{subject}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PharmaSubjects;