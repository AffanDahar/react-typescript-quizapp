import React, { useState } from "react";
import { fetchQuiz, QuestionStack } from "./Api";

import "./App.css";
import { Burger, GlobalStyle, Wrapper } from "./App.styles";
import { Card } from "./components/Card";
import { Data } from "./Data";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionStack[]>([]);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [scores, setScores] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [totalQuestions , setTotalQuestions] = useState(5)
  const [difficulty , setDifficulty] = useState('')
  console.log(difficulty)

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setNumber(0);
    setUserAnswers([]);

    const newQuestion = await fetchQuiz(
      totalQuestions,
      difficulty
    );
    setQuestions(newQuestion);
    setLoading(false);

    console.log(newQuestion);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      if (correct) setScores((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (number < totalQuestions) {
      setNumber(nextQ);
    } else {
      setGameOver(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      
      <Wrapper>
      <h1>React Quiz</h1>

       {gameOver ? (
         <div>
         <span> Total Questions </span>
         <select defaultValue={5} onChange={(e) => { setTotalQuestions(Number(e.target.value)) }}>
         {Data.questions.map(option => (
           <option  value={option}>{option}</option>
         ))}
       </select>
       </div>
       ) : null}
         {gameOver ? (
         <div>
         <span> Select Difficulty </span>
         <select onChange={(e) => { setDifficulty(e.target.value) }}>
         {Object.entries(Data.difficulty).map(([k, v])=>(
           <option key={v} value={v}>{k}</option>
         ))}
       </select>
       </div>
       ) : null}


      {gameOver ? (
        <button className="start" onClick={startQuiz}>
          Start Quiz
        </button>
      ) : null}

       { userAnswers.length === totalQuestions ? (
        <button className="start" onClick={startQuiz}>
          Restart Quiz
        </button>
      ) : null}

   

      {!gameOver && !loading && userAnswers.length !== totalQuestions ? (
        <Card
          questionNr={number + 1}
          question={questions[number].question}
          answers={questions[number].answers}
          callBack={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
        />
      ) : null}


      <Burger>
        <span></span>
        <span></span>
        <span></span>
      </Burger>



      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== totalQuestions - 1 ? (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}

      {userAnswers.length === totalQuestions && <h1>Game Over</h1>}
      {userAnswers.length === totalQuestions && <p>Your Score is : {scores}</p>}
      </Wrapper>
    </>
  );
};

export default App;
