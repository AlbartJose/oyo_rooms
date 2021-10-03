import { Offer1 } from "../components/offers/Offer1";
import styled from "styled-components";
import { Filters } from "../components/Filters/Filters";
import { HotelInfo } from "../components/HotelInfo/HotelInfo";
import { TopFilterBar } from "../components/Filters/TopFilterBar";
import { FooterTwo } from "../components/FooterTwo";
import { COVID } from "../components/COVID";
import { Navbar2 } from "../components/Navbar2/Navbar2";

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: scroll;
`;
const LeftDiv = styled.div`
  /* position: sticky; */

  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 20%;

  /* float: left; */
  /* overflow: scroll; */
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  width: 79%;
  padding: 2%;
  /* float: right; */

  /* position: relative; */

  /* overflow: scroll; */
`;

export const HotelOptions = () => {
  return (
    <>
      <Navbar2 />
      <COVID />
      <MainDiv style={{ position: "relative" }}>
        <LeftDiv style={{ float: "left", position: "sticky", top: "100px" }}>
          <Filters />
        </LeftDiv>
        <RightDiv>
          <TopFilterBar />
          <Offer1 />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
          <HotelInfo />
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
