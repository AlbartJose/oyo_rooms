import { Locations } from "./Locations";
import { SlideBar } from "./SlideBar";
import styled from "styled-components";

const P1 = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #424242;
`;
const P2 = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #424242;
`;

export const Filters = () => {
  return (
    <>
      <P1>Filters</P1>
      <P2>Popular locations in Nagpur, Maharashtra, India</P2>
      <Locations />
      <br />
      <br />
      <SlideBar />
    </>
  );
};
