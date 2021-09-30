import "./PaymentStyle.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { css } from "styled-components";

const PayInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 14px;
  width: 250px;
`;

export function PaymentDetail({ setCardOpen }) {
  const [verifyData, setVerifyData] = useState(true);
  const [verifyCode, setVerifyCode] = useState(true);
  const [sendCode, setSendCode] = useState(true);
  const [userData, setUserData] = useState({});

  // useEffect(() => {

  // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    var data = { ...userData, [name]: value };
    setUserData(data);
  };

  function handleClick() {
    if (verifyData) setSendCode(true);
  }

  function handleCardOped() {
    if (verifyCode) setCardOpen(true);
  }

  return (
    <div
      className="payDetailB1"
      style={sendCode ? { height: "500px" } : { height: "416px" }}
    >
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
            <PayInput
              onChange={handleInputChange}
              name="name"
              type="text"
              value={userData.name}
              placeholder="Enter first and last name"
            />
          </div>
          <div>
            <div className="paylabel">Email Address</div>
            <PayInput
              onChange={handleInputChange}
              name="email"
              type="text"
              placeholder="name@abc.com"
            />
          </div>
          <div className="paymarginSpecial">
            <div className="paylabel">Mobile Number</div>
            <PayInput
              onChange={handleInputChange}
              name="mobile"
              type="number"
              placeholder="e.g. 1234567890"
            />
          </div>
          {sendCode ? (
            <div>
              <div>
                <div className="paylabel">Enter 4 digit passcode</div>
                <PayInput
                  onChange={handleInputChange}
                  name="code"
                  style={
                    verifyCode
                      ? { backgroundColor: "#e8f0fe" }
                      : { backgroundColor: "white" }
                  }
                  type="text"
                  placeholder="4-digit"
                />
              </div>
              <button
                onClick={() => {
                  handleCardOped();
                }}
                className="payPasscode"
                style={
                  verifyCode
                    ? { backgroundColor: "#128037" }
                    : { backgroundColor: "#e5e5e5" }
                }
              >
                Pay Now
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => handleClick()}
                className="payPasscode"
                style={
                  verifyData
                    ? { backgroundColor: "#128037" }
                    : { backgroundColor: "#e5e5e5" }
                }
              >
                Send passcode
              </button>
            </div>
          )}
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
