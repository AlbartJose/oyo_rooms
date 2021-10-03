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

export const HostelFacilities = () => {
  return (
    <>
      <p>Hostel Facilities</p>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>Sitting Area</span>
        </p>
      </Div>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>Balcony</span>
        </p>
      </Div>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>Full Sized Bed</span>
        </p>
      </Div>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>King Sized bed</span>
        </p>
      </Div>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>AC</span>
        </p>
      </Div>
    </>
  );
};
