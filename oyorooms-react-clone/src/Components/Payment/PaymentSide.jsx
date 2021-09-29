import { useState } from "react";
import styled from "styled-components";
import "./PaymentStyle.css";

var initVar = {
  name: "SPOT ON 46946 Hotel Aalishan",
  poster: "./Images/Payment/payaali1.jpg",
  days: 16,
  new: "true",
  date: "Wed, 13 Oct - Fri, 29 Oct",
  room: "1 Room, 2 Guests",
  type: "SPOT ON NON-AC",
  price: 30722,
  pdrop: 11684,
};

export function PaymentSide() {
  const [payData] = useState(initVar);

  const PayImgDiv = styled.div`
    width: 80px;
    height: 69px;
    border: 1px solid #858585;
    border-radius: 4px;
    background: url(${payData.poster});
    background-size: contain;
  `;

  return (
    <div className="paymentB1Side">
      <div>
        <div>
          <div className="paymentSideHead">{payData.name}</div>
          <div className="paymentSideNew">NEW</div>
          <div className="paymentSideDays">{payData.days} Nights</div>
        </div>
        <PayImgDiv></PayImgDiv>
      </div>
      <div className="margin30">
        <div className="paySideIcon paySideFont14">
          <img src="./Images/Payment/Calendar.svg" alt="" />
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
        <div>Room price fo 16 Nights X 2 Guesta</div>
        <div className="paySideFont14SlightBold">₹{payData.price}</div>
      </div>
      <div className="margin20">
        <div>Price Drop</div>
        <div className="paySideFont14SlightBold">-₹{payData.pdrop}</div>
      </div>
      <div className="margin20">
        <div>25% Coupon Discount</div>
        <div className="paySideFont14SlightBold">
          -₹{Math.round((payData.price - payData.pdrop) / 4)}
        </div>
      </div>
      <div className="margin20">
        <div>5% Wizard Discount</div>
        <div className="paySideFont14SlightBold">
          -₹{Math.round((payData.price - payData.pdrop) / 20)}
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
          {payData.price -
            payData.pdrop -
            Math.round((payData.price - payData.pdrop) / 4) -
            Math.round((payData.price - payData.pdrop) / 20) +
            399}
        </div>
      </div>
    </div>
  );
}
