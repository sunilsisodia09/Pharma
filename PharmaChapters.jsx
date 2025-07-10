import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PharmaChapters.css';

const chaptersData = {
  'Human Anatomy & Physiology': {
    topics: [
      'Introduction to Human Body',
      'Skeletal System',
      'Muscular System'
    ],
    content: {
    'Introduction to Human Body': `
  <h3>📘 Introduction to Human Body</h3>

  <p><strong>Anatomy</strong> is the branch of biology that studies the physical structure of living organisms, such as organs, bones, and tissues. It focuses on what the body is made of and how those parts are arranged.</p>

  <p><strong>Physiology</strong> deals with the function of body parts. It explains how organs work together to maintain life—for example, how the heart pumps blood or how the lungs help in breathing.</p>

  <p>In simple terms: <em>"Anatomy is the study of structure, and Physiology is the study of function."</em></p>

  <p>These two fields are deeply connected, because the way a body part is structured directly affects how it performs its job. This is called the principle of <strong>structure-function relationship</strong>.</p>

  <h4>🧬 Levels of Structural Organization:</h4>
  <ul>
    <li>Chemical level</li>
    <li>Cellular level</li>
    <li>Tissue level</li>
    <li>Organ level</li>
    <li>System level</li>
    <li>Organism level</li>
  </ul>

  <h4>⚖️ Homeostasis:</h4>
  <p>Homeostasis refers to maintaining a stable internal environment in the body despite external changes. For example, regulating body temperature and pH.</p>

  <h4>📍 Anatomical Position:</h4>
  <ul>
    <li>Body upright, facing forward</li>
    <li>Feet parallel</li>
    <li>Arms at the sides</li>
    <li>Palms facing forward</li>
  </ul>

  <h4>🧭 Directional Terms:</h4>
  <ul>
    <li>Superior vs. Inferior</li>
    <li>Anterior vs. Posterior</li>
    <li>Medial vs. Lateral</li>
    <li>Proximal vs. Distal</li>
  </ul>

  <h4>📐 Body Planes:</h4>
  <ul>
    <li>Sagittal</li>
    <li>Coronal (Frontal)</li>
    <li>Transverse</li>
  </ul>

  <h4>🏥 Body Cavities:</h4>
  <ul>
    <li>Dorsal (Cranial, Spinal)</li>
    <li>Ventral (Thoracic, Abdominopelvic)</li>
  </ul>
`,


      'Skeletal System': `
        <h3>🦴 Skeletal System</h3>
        <p>The skeletal system supports the body, protects internal organs, and enables movement.</p>

        <h4>📚 Types of Bones:</h4>
        <ul>
          <li>Long bones (e.g., femur)</li>
          <li>Short bones (e.g., wrist)</li>
          <li>Flat bones (e.g., skull)</li>
          <li>Irregular bones (e.g., vertebrae)</li>
          <li>Sesamoid bones (e.g., patella)</li>
        </ul>

        <h4>💉 Functions:</h4>
        <ul>
          <li>Support & structure</li>
          <li>Movement</li>
          <li>Blood cell formation</li>
          <li>Mineral storage</li>
        </ul>
      `,

      'Muscular System': `
        <h3>💪 Muscular System</h3>
        <p>The muscular system allows movement, maintains posture, and generates heat.</p>

        <h4>🏋️ Types of Muscle Tissue:</h4>
        <ul>
          <li>Skeletal (voluntary)</li>
          <li>Cardiac (heart)</li>
          <li>Smooth (involuntary, organs)</li>
        </ul>

        <h4>⚙️ Functions:</h4>
        <ul>
          <li>Movement</li>
          <li>Posture</li>
          <li>Heat production</li>
        </ul>
      `
    }
  }
};

const PharmaChapters = () => {
  const { subjectSlug } = useParams();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const matchedSubject = Object.keys(chaptersData).find(
    (key) => slugify(key) === subjectSlug
  );

  const topics = matchedSubject ? chaptersData[matchedSubject].topics : [];
  const content = matchedSubject ? chaptersData[matchedSubject].content : {};

  return (
    <div className="chapter-container">
      <h1>Subject Topics: {matchedSubject || 'Unknown Subject'}</h1>

      <div className="topic-buttons">
        {topics.map((chapter, index) => (
          <button
            key={index}
            onClick={() => setSelectedTopic(chapter)}
            className="chapter-btn"
          >
            {chapter}
          </button>
        ))}
      </div>

      {selectedTopic && (
        <div className="topic-content">
          <h2>{selectedTopic}</h2>
          <div dangerouslySetInnerHTML={{ __html: content[selectedTopic] }} />
        </div>
      )}
    </div>
  );
};

export default PharmaChapters;
