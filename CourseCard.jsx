import React from 'react';
// import './CourseCard.css';

const courses = [
  {
    title: 'Clinical Research',
    description: 'Learn protocols, ethics, and methodologies of drug trials.',
    link: '#',
  },
  {
    title: 'Pharmacovigilance',
    description: 'Monitor and analyze adverse drug reactions post-marketing.',
    link: '#',
  },
  {
    title: 'Regulatory Affairs',
    description: 'Understand global regulatory processes and drug approval paths.',
    link: '#',
  },
  {
    title: 'Industrial Pharmacy',
    description: 'Master drug formulation, quality control, and manufacturing.',
    link: '#',
  },
  {
    title: 'Pharma Marketing & Management',
    description: 'Promote, strategize, and manage pharma product lifecycles.',
    link: '#',
  },
  {
    title: 'Pharmaceutical R&D',
    description: 'Dive into new drug development, design, and innovation.',
    link: '#',
  },
  {
    title: 'Medical Writing',
    description: 'Learn scientific documentation for research and publication.',
    link: '#',
  },
  {
    title: 'Bioinformatics in Pharma',
    description: 'Use AI and data analysis to accelerate drug discovery.',
    link: '#',
  },
];

const PharmaCourses = () => {
  return (
    <div className="courses-wrapper">
      <h2 className="courses-heading">Top Pharmacy Courses for Jobs & Research</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={course.link} className="explore-btn">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmaCourses;
