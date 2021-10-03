import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/core/SwitchUnstyled";
import { Div } from "./Div4TopFilter";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Root = styled("span")(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #B3C3D3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #FFF;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255,255,255,1);
    box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
  }

  &.${switchUnstyledClasses.checked} { 
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #FFF;
    }

    .${switchUnstyledClasses.track} {
      background: #007FFF;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }`);

export const TopFilterBar = () => {
  //   const [age, setAge] = useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <Div>
      <div className="searchCount">
        <p>81 OYOs in Nagpur, Maharashtra, India</p>
      </div>
      <div>
        <div>
          <span
            style={{
              fontSize: "14px",
              padding: "2%",
              width: "80px",
              marginTop: "4px",
            }}
          >
            Map View{" "}
          </span>
          <SwitchUnstyled
            component={Root}
            {...label}
            style={{
              //   width: "80px",
              marginTop: "7px",
            }}
          />
        </div>
        <div>
          <span
            style={{
              fontSize: "14px",
              padding: "5%",
              width: "80px",
              marginTop: "-5px",
            }}
          >
            Sort By{" "}
          </span>
          <Select
            defaultValue="Popularity"
            style={{ width: 150 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
              //   displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              style={{
                width: "200px",
                // border: "none",
                textDecoration: "none",
                height: "40px",
              }}
            >
              <MenuItem value="">Popularity</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
        </div>
      </div>
    </Div>
  );
};
