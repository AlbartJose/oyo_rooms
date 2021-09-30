import { Input, Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-right: 5%; */
`;

export const Locations = () => {
  return (
    <>
      <Input
        placeholder="Search..."
        style={{ color: "#F0F0F0", borderColor: "#F0F0F0" }}
      />
      <ButtonDiv>
        <Button
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
        </Button>
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
