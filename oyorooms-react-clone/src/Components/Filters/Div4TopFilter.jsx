import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.5px solid #d3d3d3;
  margin-bottom: 2%;

  & div {
    display: flex;
  }

  & p {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #424242;
  }
`;
