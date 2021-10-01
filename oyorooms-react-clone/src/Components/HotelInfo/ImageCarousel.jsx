import styled from "styled-components";

const images = [
  "https://images.oyoroomscdn.com/uploads/hotel_image/92579/thumb/27498ea39fbf1f5a.jpg",
  "https://images.oyoroomscdn.com/uploads/hotel_image/92579/thumb/cc7f66c3df521759.jpg",
  "https://images.oyoroomscdn.com/uploads/hotel_image/92579/thumb/a173105cbc4c727a.jpg",
  "https://images.oyoroomscdn.com/uploads/hotel_image/92579/thumb/48ac42d4fefcf542.jpg",
  "https://images.oyoroomscdn.com/uploads/hotel_image/92579/thumb/34e28101ded60c38.jpg",
];

const img =
  "https://images.oyoroomscdn.com/uploads/hotel_image/92579/medium/2d49ec12e16c0d99.jpg";

const Div = styled.div`
  display: flex;
  height: 250px;
  margin: 0.5%;
`;

const LDiv = styled.div`
  width: 80%;
  & img {
    width: 100%;
    height: 100%;
    margin: 0.5%;
  }
`;
const RDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0.5%;

  & img {
    width: 100%;
    height: 20%;
    margin: 0.5%;
  }
`;

export const ImageCarousel = () => {
  return (
    <Div>
      <LDiv>
        <img src={img} alt="" />
      </LDiv>
      <RDiv>
        {images.map((image) => (
          <img src={image} alt="" />
        ))}
      </RDiv>
    </Div>
  );
};
