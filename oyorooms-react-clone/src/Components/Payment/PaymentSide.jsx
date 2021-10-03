import { useState } from "react";
import styled from "styled-components";
import "./PaymentStyle.css";

const PayImgDiv = styled.div`
  width: 80px;
  height: 69px;
  border: 1px solid #858585;
  border-radius: 4px;
  background-size: contain;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export function PaymentSide({ initVar, payDataDetail,payImg }) {
  const [payData] = useState(initVar);



  return (
    <div className="paymentB1Side">
      <div>
        <div>
          <div className="paymentSideHead">{payDataDetail.name}</div>
          <div className="paymentSideNew">NEW</div>
          <div className="paymentSideDays">{payData.days} Nights</div>
        </div>
        <PayImgDiv>

          <img src={payImg[0]} alt="" />

        </PayImgDiv>
      </div>
      <div className="margin30">
        <div className="paySideIcon paySideFont14">
          <img src="./Images/Payment/Group 24.svg" alt="" />
          {payData.date}
        </div>
        <div className="paySideFont14">{payData.room}</div>
      </div>
      <div className="margin30">
        <div className="paySideIcon paySideFont14">
          <img src="./Images/Payment/Type.svg" alt="" />
          {payData.type}
        </div>
      </div>
      <div className="margin20">
        <div>Room price for 16 Nights X 2 Guesta</div>
        <div className="paySideFont14SlightBold">
          ₹{payDataDetail.price * 3}
        </div>
      </div>
      <div className="margin20">
        <div>Price Drop</div>
        <div className="paySideFont14SlightBold">
          -₹{payDataDetail.price * 2}
        </div>
      </div>
      <div className="margin20">
        <div>25% Coupon Discount</div>
        <div className="paySideFont14SlightBold">
          -₹{Math.round(payDataDetail.price / 4)}
        </div>
      </div>
      <div className="margin20">
        <div>5% Wizard Discount</div>
        <div className="paySideFont14SlightBold">
          -₹{Math.round(payDataDetail.price / 20)}
        </div>
      </div>
      <div className="margin20">
        <div>Wizard Gold at a special price </div>
        <div className="paySideFont14SlightBold">₹399</div>
      </div>

      <div>
        <div>
          <div className="paySideFinalAmt">Payable Amount</div>
          <div className="paySideFinalSideHead">inclusive of all taxes</div>
        </div>
        <div className="payAmt">
          ₹
          {payDataDetail.price -
            Math.round(payDataDetail.price / 4) -
            Math.round(payDataDetail.price / 20) +
            399}
        </div>
      </div>
    </div>
  );
}
