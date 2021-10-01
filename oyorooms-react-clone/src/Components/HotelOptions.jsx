import { Offer1 } from "./offers/Offer1";
import styled from "styled-components";
import { Filters } from "./Filters/Filters";
import { HotelInfo } from "./HotelInfo/HotelInfo";
import { TopFilterBar } from "./Filters/TopFilterBar";
import { FooterTwo } from "./FooterTwo";
import { COVID } from "./COVID";

const MainDiv = styled.div`
  display: flex;
  width: 100%;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 20%;
  position: sticky;
  position: -webkit-sticky;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 79%;
  padding: 2%;
`;

export const HotelOptions = () => {
  return (
    <>
      <COVID />
      <MainDiv>
        <LeftDiv>
          <Filters />
        </LeftDiv>
        <RightDiv>
          <TopFilterBar />
          <Offer1 />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
        </RightDiv>
      </MainDiv>
      <FooterTwo />
    </>
  );
};
