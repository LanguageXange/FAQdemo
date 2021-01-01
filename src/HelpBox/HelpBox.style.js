import styled from "styled-components";

export const HelpBoxContainer = styled.div`
  grid-column: 11/13;
  display: grid;
  margin-right: 20px;
  grid-template-rows: repeat(10, 1fr);
`;

export const HelpBoxContent = styled.div`
  padding: 20px 10px;
  grid-row: 9/10;
  background-color: rgba(10, 10, 50, 0.01);
  box-shadow: 5px 8px 12px rgba(0, 0, 0, 0.1);
  h5 {
    margin: 0;
    font-size: 14px;
    margin-bottom: 10%;
  }
  svg {
    font-size: 25px;
    margin-right: 15px;
    :hover {
      cursor: pointer;
    }
    &.up:hover {
      color: #4a5bf2;
    }
    &.down:hover {
      color: #ff3c3c;
    }
  }
`;
