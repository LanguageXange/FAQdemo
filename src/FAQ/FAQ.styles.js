import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-column: 4/11;

  h3 {
    margin: 0;
    font-size: 22px;
    color: #cc6600;
  }
`;
const activeStyle = css`
  border-bottom: 3px solid #ff9900;
  box-shadow: 5px 8px 12px rgba(255, 153, 0, 0.1);
`;

const activeStyling = ({ isActive }) => {
  if (isActive) {
    return activeStyle;
  }
};
export const Accordion = styled.div`
  background-color: rgba(10, 10, 50, 0.03);
  padding: 20px;
  border-bottom: 3px solid #37475a;
  border-radius: 10px 10px 30px 10px;
  height: min-content;
  ${activeStyling}
`;

export const FaQAnswerContainer = styled.section`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  user-select: none;
  transition: opacity 0.5s ease-in-out;
  &.active {
    max-height: max-content;
    opacity: 1;
    margin-top: 10px;
  }
`;

export const FaqHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  text-align: left;
  span {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      color: #146eb4;
    }
  }
  svg {
    top: 1px;
    right: 1px;
    width: 25px;
    height: 25px;
    position: absolute;
  }
`;
export const FaqTitle = styled.h2`
  margin: 0px;
  margin-right: 40px;
  user-select: none;
`;

export const FaqDesc = styled.div`
  text-align: left;
  margin: 0px;
  margin-right: 105px;
  font-size: 15px;

  line-height: 18px;
`;
