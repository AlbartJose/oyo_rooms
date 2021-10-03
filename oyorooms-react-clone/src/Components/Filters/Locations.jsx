// import { Input, Button } from "antd";
//import "antd/dist/antd.css";
import styled from "styled-components";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { useMemo } from "react";
import Button from "@mui/material/Button";

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = useMemo(() => {
//     if (focused) {
//       return "This field is being focused";
//     }

//     return "Helper text";
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
// }

const ButtonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-right: 5%; */
`;

export const Locations = () => {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: "30ch" }}>
          <OutlinedInput
            placeholder="Search"
            style={{ fontSize: "12px", padding: "0px" }}
          />
          {/* <MyFormHelperText /> */}
        </FormControl>
      </Box>

      <ButtonDiv>
        <Button
          variant="contained"
          style={{
            borderRadius: "0px",
            margin: "3px 3px 0 3px",
            background: "#E5E5E5",
            color: "#6D787D",
            width: "auto",
            shadow: "none",
          }}
        >
          Railway Station
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "0px",
            margin: "3px 3px 0 3px",
            background: "#E5E5E5",
            color: "#6D787D",
            width: "auto",
            shadow: "none",
          }}
        >
          Gandhi Road
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "0px",
            margin: "3px 3px 0 3px",
            background: "#E5E5E5",
            color: "#6D787D",
            width: "auto",
            shadow: "none",
          }}
        >
          University Road
        </Button>

        {/* <Button
          style={{
            width: "auto",
            margin: "2% 2% 0 0",
            background: "#E5E5E5",
            color: "#6D787D",
          }}
        >
          Railway Station
        </Button>
        <Button
          style={{
            width: "auto",
            margin: "2% 2% 0 0",
            background: "#E5E5E5",
            color: "#6D787D",
          }}
        >
          Kochi
        </Button>
        <Button
          style={{
            width: "auto",
            margin: "2% 2% 0 0",
            background: "#E5E5E5",
            color: "#6D787D",
          }}
        >
          Railway Station Road
        </Button> */}
      </ButtonDiv>
      <Button
        type="link"
        style={{
          alignSelf: "flex-start",
          color: "#EE2E24",
          paddingLeft: 0,
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        + View More
      </Button>
    </>
  );
};
