import "./PaymentStyle.css";
import { PaymentDetail } from "./PaymentDetail";
import { PaymentCompleteClosed } from "./PaymentCompleteClosed";
import { PaymentSide } from "./PaymentSide";
import { PaymentCompleteOpen } from "./PaymentCompleteOpen";
import { PaymentInpDetail } from "./PaymentInpDetail";
import { useState } from "react";

export function PaymentMain() {
  const [cardOpen, setCardOpen] = useState(false);
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
                <PaymentInpDetail setCardOpen={setCardOpen} />
                <PaymentCompleteOpen />
              </>
            ) : (
              <>
                <PaymentDetail setCardOpen={setCardOpen} />
                <PaymentCompleteClosed />
              </>
            )}
          </div>
          <PaymentSide />
        </div>
      </div>
    </div>
  );
}
