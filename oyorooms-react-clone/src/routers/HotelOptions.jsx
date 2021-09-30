// import { Offer1 } from "../components/offers/Offer1";
import styled from "styled-components";
import { Filters } from "../components/Filters/Filters";
import { HotelInfo } from "../components/HotelInfo/HotelInfo";
import { TopFilterBar } from "../components/Filters/TopFilterBar";
import { FooterTwo } from "../components/FooterTwo";

const MainDiv = styled.div`
  display: flex;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 30%;
  position: sticky;
  position: -webkit-sticky;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HotelOptions = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <Filters />
      </LeftDiv>
      <RightDiv>
        {/* <Offer1 /> */}
        <TopFilterBar />
        <HotelInfo />
        <HotelInfo />
        <HotelInfo />
        <HotelInfo />
      </RightDiv>
      <FooterTwo />
    </MainDiv>
  );
};
