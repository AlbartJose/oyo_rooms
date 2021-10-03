import { Locations } from "./Locations";
import { SlideBar } from "./SlideBar";
import styled from "styled-components";
import { Categories } from "./Categories";
import { Collections } from "./Collections";
import { AccomodationType } from "./AccomodationType";
import { HostelFacilities } from "./HostelFacilities";

const P1 = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #424242;
`;
const P2 = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #424242;
`;

const ComponentDiv = styled.div`
  border-bottom: 0.5px solid #f0f0f0;
  padding: 5% 0;
`;

export const Filters = () => {
  return (
    <div style={{ position: "sticky", top: "-700px", marginTop: "-10%" }}>
      <ComponentDiv>
        <P1>Filters</P1>
        <P2>Popular locations in Nagpur, Maharashtra, India</P2>
        <Locations />
      </ComponentDiv>

      <ComponentDiv>
        <SlideBar />
      </ComponentDiv>
      <ComponentDiv>
        <Collections />
      </ComponentDiv>
      <ComponentDiv>
        <Categories />
      </ComponentDiv>
      <ComponentDiv>
        <AccomodationType />
      </ComponentDiv>
      <ComponentDiv>
        <HostelFacilities />
      </ComponentDiv>
    </div>
  );
};
