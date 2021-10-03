import "./PaymentStyle.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Counter from "./Counter";

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

var initData = {
  name: "",
  email: "",
  mobile: "",
  code: "",
};

export function PaymentDetail({ setCardOpen, setUser }) {
  const [verifyData, setVerifyData] = useState(false);
  const [verifyCode, setVerifyCode] = useState(false);
  const [sendCode, setSendCode] = useState(false);
  const [userData, setUserData] = useState(initData);
  const [isTimer, setIsTimer] = useState(false);

  useEffect(() => {
    if (
      userData.name.length > 3 &&
      userData.email.length > 4 &&
      userData.mobile.length >= 10
    )
      setVerifyData(true);
    if (userData.code.length === 4 && isTimer) setVerifyCode(true);
    else setVerifyCode(false);
  }, [isTimer, userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    var data = { ...userData, [name]: value };
    setUserData(data);
  };

  function handleClick() {
    if (verifyData) {
      setSendCode(true);
      setIsTimer(true);
    }
  }

  function handleCardOped() {
    if (verifyCode) {
      setUser(userData);
      setCardOpen(true);
    }
  }

  const handleResend = () => {
    setIsTimer(true);
  };

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
              style={
                verifyData
                  ? { backgroundColor: "#e8f0fe" }
                  : { backgroundColor: "white" }
              }
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
              style={
                verifyData
                  ? { backgroundColor: "#e8f0fe" }
                  : { backgroundColor: "white" }
              }
              onChange={handleInputChange}
              name="email"
              type="text"
              placeholder="name@abc.com"
            />
          </div>
          <div className="paymarginSpecial">
            <div className="paylabel">Mobile Number</div>
            <PayInput
              style={
                verifyData
                  ? { backgroundColor: "#e8f0fe" }
                  : { backgroundColor: "white" }
              }
              onChange={handleInputChange}
              name="mobile"
              type="number"
              placeholder="e.g. 1234567890"
            />
          </div>
          {sendCode ? (
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <div className="paylabel">Enter 4 digit passcode</div>
                  <PayInput
                    onChange={handleInputChange}
                    name="code"
                    style={
                      verifyCode
                        ? { backgroundColor: "#e8f0fe", width: "236px" }
                        : { backgroundColor: "white", width: "236px" }
                    }
                    type="text"
                    placeholder="4-digit"
                  />
                </div>
                <div className="verifytimer">
                  {isTimer ? (
                    <div>
                      <Counter
                        initTime={30}
                        finalTime={0}
                        setIsTimer={setIsTimer}
                      />
                    </div>
                  ) : (
                    <div onClick={handleResend}>
                      <div>Resend</div>
                      <div>Code</div>
                    </div>
                  )}
                </div>
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
