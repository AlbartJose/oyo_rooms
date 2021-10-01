import "./PaymentStyle.css";
import { PaymentDetail } from "./PaymentDetail";
import { PaymentCompleteClosed } from "./PaymentCompleteClosed";
import { PaymentSide } from "./PaymentSide";
import { PaymentCompleteOpen } from "./PaymentCompleteOpen";
import { PaymentInpDetail } from "./PaymentInpDetail";
import { useState } from "react";

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

export function PaymentMain() {
  const [payData] = useState(initVar);
  const [cardOpen, setCardOpen] = useState(false);
  const [user, setUser] = useState({});
  return (
    <div>
      <div className="headerPay"></div>
      <div className="paymentB1">
        <div className="payModify">{"< "} Modify your booking</div>
        <div className="payB1B1">
          <div className="paymentB1Main">
            <div className="paySave">
              Yay! You just saved Rs 5437 on this booking!
            </div>
            {cardOpen ? (
              <>
                <PaymentInpDetail setCardOpen={setCardOpen} user={user} />
                <PaymentCompleteOpen
                  price={
                    payData.price -
                    payData.pdrop -
                    Math.round((payData.price - payData.pdrop) / 4) -
                    Math.round((payData.price - payData.pdrop) / 20) +
                    399
                  }
                />
              </>
            ) : (
              <>
                <PaymentDetail setCardOpen={setCardOpen} setUser={setUser} />
                <PaymentCompleteClosed />
              </>
            )}
          </div>
          <PaymentSide initVar={initVar} />
        </div>
      </div>
    </div>
  );
}
