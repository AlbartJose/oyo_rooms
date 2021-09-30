import { ImageCarousel } from "./ImageCarousel";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  margin: 0;
  padding: 4% 0;
  border-bottom: 1px solid #e6e6e6;
`;

const ItemHead = styled.div`
  display: flex;
  height: auto;
`;

const LDiv = styled.div``;

const RDiv = styled.div`
  display: flex;
  & div {
    flex: 1;
  }
`;

const RateDiv = styled.div`
  margin-left: 52px;
`;

const Alert = styled.p`
  color: #ee2e24;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.025em;
  text-align: left;
  flex: 0.5;
`;

const Head = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: left;
  color: #424242;
`;

const Location = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: -0.005em;
  text-align: left;
  color: #424242;
`;

const Rating = styled.div`
  position: absolute;
  width: 46px;
  height: 20px;
  background: #5ecc37;
  border-radius: 2px;
  border-radius: 5%;
  color: #ffffff;
  padding: 0.1%;
  margin-top: 0;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HotelInfo = () => {
  return (
    <>
      <Div>
        <LDiv>
          <ImageCarousel />
        </LDiv>
        <RDiv>
          <Block>
            <ItemHead>
              <div>
                <Head>Hotel Name</Head>
                <Location>Near Sitabuldi, Nagpur</Location>
              </div>
              <Alert>Vaccinated staff. RT-PCR report required</Alert>
            </ItemHead>
            <div>
              <Rating> 3.5 ★</Rating>
              <RateDiv>(300 Ratings) . Good</RateDiv>
            </div>
            <div> </div>
          </Block>
        </RDiv>
      </Div>
    </>
  );
};
