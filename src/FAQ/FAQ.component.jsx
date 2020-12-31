import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  Container,
  Accordion,
  FaQAnswerContainer,
  FaqTitle,
  FaqDesc,
  FaqHeader,
} from "./FAQ.styles";
const FAQ = ({ data }) => {
  const [questionID, setQuestionId] = useState(null);

  return (
    <Container>
      <h3>FAQ</h3>
      {data.map(({ question, answer }, id) => (
        <Accordion key={id} isActive={questionID === id}>
          <FaqHeader>
            <FaqTitle>{question}</FaqTitle>
            <span
              onClick={() => {
                questionID === id ? setQuestionId(null) : setQuestionId(id);
              }}
            >
              {questionID === id ? <FaMinus /> : <FaPlus />}
            </span>
          </FaqHeader>

          <FaQAnswerContainer className={questionID === id ? "active" : null}>
            <FaqDesc>{answer}</FaqDesc>
          </FaQAnswerContainer>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
