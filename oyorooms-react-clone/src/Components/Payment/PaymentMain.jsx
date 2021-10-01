import "./PaymentStyle.css";
import { PaymentDetail } from "./PaymentDetail";
import { PaymentCompleteClosed } from "./PaymentCompleteClosed";
import { PaymentSide } from "./PaymentSide";
import { PaymentCompleteOpen } from "./PaymentCompleteOpen";
import { PaymentInpDetail } from "./PaymentInpDetail";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [payData] = useState(initVar);
  const [cardOpen, setCardOpen] = useState(false);
  const [user, setUser] = useState({});
  const [confirm, setConfirm] = useState(false);

  const handleleave = () => {
    setConfirm(false);
    history.push("/");
  };
  return (
    <div className="payMain">
      <div className="headerPay">
        <div>
          <img src="./Images/Payment/Union.svg" alt="" />
        </div>
      </div>
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
                  setConfirm={setConfirm}
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

      {confirm && (
        <div className="payBlur">
          <div>
            <div className="paymentConfirmed">
              <div className="payTick">
                <img src="./Images/Payment/Group.svg" alt="" />
              </div>
              <div>Booking Confirmed</div>
              <div>
                You will receive a mail in your above mentioned email-ID
              </div>
              <div>View Order Details</div>
              <button onClick={handleleave} className="payThankYou">
                THANK YOU
              </button>
            </div>
            <div>
              <PaymentSide initVar={initVar} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
