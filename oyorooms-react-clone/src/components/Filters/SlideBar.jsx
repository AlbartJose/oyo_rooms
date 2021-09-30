// import { Slider } from "antd";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

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

// function valuetext(value) {
//   return `${value}°C`;
// }

export const SlideBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <P>Price</P>
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          Temperature range
        </Typography>
        <Slider
          value={value}
          color="secondary"
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    </>
  );
};
