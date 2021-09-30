import styled from "styled-components";

const Div = styled.div`
  border: 1px solid #ccc;
  border-left: 3px solid blue;
  position: absolute;
  width: 373px;
  height: 42px;
  right: 40px;
  top: 15px;
  line-height: 0.21px;
  padding: 0;

  & > h5 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.005em;

    color: #000000;
  }

  & p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 14px;
    /* line-height: 21px; */
    letter-spacing: -0.005em;

    color: #000000;
  }

  & span {
    color: red;
  }
`;

export const Offer1 = () => {
  return (
    <Div>
      <h5>
        Earn <span>₹500</span>
      </h5>
      <p>Create an account to get ₹500 as OYO Money</p>
    </Div>
  );
};
