import React, { useState } from 'react';
import Wheel from './components/Wheel';
import Question from './components/Question';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState([
    { text: "What is Article 1 about?", answer: "Union and its territory" },
    { text: "Which article is related to the right to equality?", answer: "Article 14" },
    { text: "Which part of the Constitution deals with the Legislature?", answer: "Part V" },
    { text: "What is the function of the Executive?", answer: "Enforcement of laws" },
    { text: "What is the Judiciary's role?", answer: "Interpretation of laws" },
    { text: "Which article discusses the Supreme Court?", answer: "Article 124" },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [points, setPoints] = useState(0);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleSpin = (index) => {
    setCurrentQuestion(questions[index]);
    setFeedback('');
  };

  const handleAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback('Correct!');
      setPoints(points + 10);
    } else {
      setFeedback('Incorrect. Try again!');
    }
    setCurrentQuestion(null);
  };

  const addQuestion = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setQuestions([...questions, { text: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <div className="App">
      <h1>Spin the Wheel: Constitution Trivia</h1>
      <p>Points: {points}</p>
      <Wheel  onSpin={handleSpin} questions={ questions} className="custom-wheel" /> {/* Fixed */}
      {currentQuestion && <Question question={currentQuestion} onAnswer={handleAnswer} />}
      {feedback && <p>{feedback}</p>}

      <div className="add-question-form">
        <h2>Add a New Question</h2>
        <input
          type="text"
          placeholder="Enter the question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button onClick={addQuestion}>Add Question</button>
      </div>
    </div>
  );
};

export default App;
