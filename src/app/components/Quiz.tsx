"use client";
import { useState } from "react";
import { questions } from "../questions";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer: string) => {
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <div className="question-header">
            <h2>{currentQuestion.question}</h2>
          </div>
          <ul className="options-list">
            {currentQuestion.options.map((option, index) => (
              <div
                className="item"
                key={index}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
