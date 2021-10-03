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

export const Collections = () => {
  return (
    <>
      <p>Collections</p>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>Sanitized before your eyes</span>
        </p>
      </Div>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>Vaccinated Staff</span>
        </p>
      </Div>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>Local IDs Accepted</span>
        </p>
      </Div>
      <Div>
        <div>
          <Checkbox {...label} />
        </div>
        <p>
          <span>OYO Welcomes Couples</span>
        </p>
      </Div>
    </>
  );
};
