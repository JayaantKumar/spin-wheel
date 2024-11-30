// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    onAnswer(userAnswer);
    setUserAnswer('');
  };

  return (
    <div className="question-section">
      <p>{question.text}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default Question;
