import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.5px solid #d3d3d3;
  margin-bottom: 2%;
  margin-top: -2%;
  & > div {
    display: flex;
  }

  & > div > p {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #424242;
  }

  & > div > div {
    display: flex;
    /* margin-top: 5px; */
  }
  & > div > div > p {
    margin-bottom: 5px;
    /* padding-top: 10px; */
  }
  & > div > div > div {
    margin-top: 7px;
  }
`;
