import styled from "styled-components";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const P = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #424242;
`;

export const SlideBar = () => {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <P>Price</P>

      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          style={{ margin: "0 3%", color: "#F36C65" }}
        />
      </Box>
    </>
  );
};
