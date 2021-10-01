import styled from "styled-components";

const Div = styled.div`
  background-color: #d79a12;
  color: #000000;
  width: 100%;
  height: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
`;

export const COVID = () => {
  return (
    <Div>
      Please check the travel advisory issued by the concerned state
      government/local authorities before booking, as some places may have
      COVID-19 related travel/lodging restrictions.
    </Div>
  );
};
