import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

const Div = styled.div`
  display: flex;

  & > p {
    margin-top: 4%;
  }
  & span {
    color: darkgray;
  }
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const AccomodationType = () => {
  return (
    <>
      <p>Accomodation Type</p>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>Hotel</span>
        </p>
      </Div>
    </>
  );
};
