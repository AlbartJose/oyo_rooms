import { Offer1 } from "../components/offers/Offer1";
import styled from "styled-components";
import { Filters } from "../components/Filters/Filters";
const MainDiv = styled.div`
  display: flex;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 30%;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HotelOptions = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <Filters />
      </LeftDiv>
      <RightDiv>
        <Offer1 />
      </RightDiv>
    </MainDiv>
  );
};
