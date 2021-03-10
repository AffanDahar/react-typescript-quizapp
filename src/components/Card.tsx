import React from "react";
import { AnswerObject } from "../App";
import { Wrapper , ButtonWrapper } from "./Card.styles";

type Props = {
  questionNr: number;
  question: string;
  answers: string[];
  callBack : (e : any) => void
  userAnswer : AnswerObject | undefined
};

export const Card: React.FC<Props> = ({ questionNr, question, answers , callBack , userAnswer }) => {
  return (
      <Wrapper>
      <h2>Question : {questionNr}</h2>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper 
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}>
            <button onClick={callBack} value={answer} disabled={userAnswer ? true : false} >
              <span dangerouslySetInnerHTML={{__html : answer}}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
      </Wrapper>
  );
};
