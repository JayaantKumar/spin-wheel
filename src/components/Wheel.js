import React, { useState } from 'react';
import './Wheel.css';

const Wheel = ({ onSpin, questions }) => {
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (!spinning) {
      setSpinning(true);
      const randomIndex = Math.floor(Math.random() * questions.length);
      const rotateDegree = randomIndex * (360 / questions.length) + 3600; // Calculate rotation
      document.querySelector('.wheel').style.transform = `rotate(${rotateDegree}deg)`;

      setTimeout(() => {
        setSpinning(false);
        onSpin(randomIndex);
      }, 4000);
    }
  };

  return (
    <div className="wheel-container">
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        {questions.map((question, index) => (
          <div
            key={index}
            className="wheel-section"
            style={{
              transform: `rotate(${index * (360 / questions.length)}deg)`,
            }}
          >
            <div className="question-text">
              {question.text}
            </div>
          </div>
        ))}
      </div>
      <div className="wheel-pointer"></div> {/* Inverted pointer below the wheel */}
      <button onClick={handleSpin} disabled={spinning}>
        Spin
      </button>
    </div>
  );
};

export default Wheel;
