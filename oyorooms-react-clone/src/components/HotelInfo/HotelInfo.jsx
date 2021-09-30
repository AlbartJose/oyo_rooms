import { ImageCarousel } from "./ImageCarousel";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  margin: 0;
  padding: 4% 0;
  border-bottom: 1px solid #e6e6e6;
`;

const LDiv = styled.div``;

const RDiv = styled.div`
  display: flex;
  & div {
    flex: 1;
  }
`;

export const HotelInfo = () => {
  return (
    <>
      <Div>
        <LDiv>
          <ImageCarousel />
        </LDiv>
        <RDiv>
          <div>
            <h1>Hotel Name</h1>
            <p>Near Sitabuldi, Nagpur</p>
          </div>
          <div>Vaccinated staff. RT-PCR report required</div>
        </RDiv>
      </Div>
    </>
  );
};
