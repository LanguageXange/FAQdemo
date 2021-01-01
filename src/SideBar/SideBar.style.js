import styled from "styled-components";

export const SideBarContainer = styled.div`
  grid-column: 1 / 4;
  padding: 20px;
  margin-left: 40px;
  margin-right: 40px;
  h1 {
    font-size: 40px;
  }
  h1:nth-of-type(1) {
    padding: 15px;
    border-top: 3px solid black;
    border-left: 3px solid black;
  }
  h1:last-of-type {
    padding: 15px;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }
`;
