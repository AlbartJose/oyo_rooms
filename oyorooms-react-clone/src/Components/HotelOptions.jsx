import { Offer1 } from "./offers/Offer1";
import styled from "styled-components";
import { Filters } from "./Filters/Filters";
import { HotelInfo } from "./HotelInfo/HotelInfo";
import { TopFilterBar } from "./Filters/TopFilterBar";
import { FooterTwo } from "./FooterTwo";
import { COVID } from "./COVID";
import { Navbar2 } from "../Components/Navbar2/Navbar2";
import { hotels } from "./db";
import { useState, useEffect } from "react";

const MainDiv = styled.div`
  display: flex;
  width: 100%;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 25%;
  position: sticky;
  position: -webkit-sticky;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 74%;
  padding: 2%;
`;

export const HotelOptions = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = hotels;
    // console.log(hotels.hotel);
    setCardData(data.hotel);
  }, []);
  return (
    <>
      <div style={{ postion: "fixed" }}>
        <Navbar2 />
      </div>
      <div>
        <COVID />
        <MainDiv>
          <LeftDiv>
            <Filters />
          </LeftDiv>
          <RightDiv>
            <TopFilterBar />
            <Offer1 />
            {cardData.map((e) => {
              return <HotelInfo key={e.id} data={e} />;
            })}
          </RightDiv>
        </MainDiv>
        <FooterTwo />
      </div>
    </>
  );
};
