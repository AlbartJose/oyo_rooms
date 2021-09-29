import "./PaymentStyle.css";
import styled from "styled-components";
import { useState } from "react";

export function PaymentDetail() {
  const [inpCol] = useState("#E8F0FE");
  const PayInput = styled.input`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 14px;
    width: 250px;
    background-color: ${inpCol};
  `;
  return (
    <div className="payDetailB1">
      <div className="payDetailHead">
        <div className="payDetailHeadB1">1</div>
        <div className="payDetailHeadB2">Enter your details</div>
      </div>
      <div className="payFillInputB1">
        <div className="payFillInputB1Note">
          We will use these details to share your booking information{" "}
        </div>
        <div className="payInpBoxes">
          <div className="paymarginSpecial">
            <div className="paylabel">Full Name</div>
            <PayInput type="text" placeholder="Enter first and last name" />
          </div>
          <div>
            <div className="paylabel">Email Address</div>
            <PayInput type="text" placeholder="name@abc.com" />
          </div>
          <div className="paymarginSpecial">
            <div className="paylabel">Mobile Number</div>
            <PayInput type="number" placeholder="e.g. 1234567890" />
          </div>
          <div>
            <button className="payPasscode">Send passcode</button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
