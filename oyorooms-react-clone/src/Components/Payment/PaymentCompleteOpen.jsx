import { useState, useEffect } from "react";
import "./PaymentStyle.css";
import { useHistory } from "react-router-dom";

var initcard = {
  card_name: "",
  card_num: "",
  card_mm: "",
  card_yy: "",
  card_cvv: "",
};

export function PaymentCompleteOpen({ price }) {
  const history = useHistory();
  const [verifyCard, setVerifyCard] = useState(false);
  const [cardData, setCardData] = useState(initcard);

  function handleClick() {
    if (verifyCard) history.push("/");
  }

  useEffect(() => {
    if (
      cardData.card_name.length > 3 &&
      cardData.card_num.length === 16 &&
      cardData.card_mm >= 1 &&
      cardData.card_mm <= 12 &&
      cardData.card_yy > 2021 &&
      cardData.card_cvv.length === 3
    ) {
      setVerifyCard(true);
    }
  }, [cardData]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    var data = { ...cardData, [name]: value };
    setCardData(data);
  };

  return (
    <div className="payCompleteOpen">
      <div className="payDetailHead">
        <div className="payDetailHeadB1">2</div>
        <div className="payDetailHeadB2">Complete your booking.</div>
      </div>
      <div className="payCompleteFlex">
        <div className="payCompleteB1">
          <div className="payCompletePayNow">
            <div>PAY NOW</div>
            <div>^</div>
          </div>
          <div className="payCompleteSelect">Credit/Debit/ATM Cards</div>
          <div>Wallets</div>
          <div>Pay using UPI</div>
          <div>Net Banking</div>
        </div>
        <div className="payCompleteB2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <div>
                <svg
                  width="21"
                  height="15"
                  viewBox="0 0 26 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 15V2C1 1.44772 1.44772 1 2 1H21C21.5523 1 22 1.44772 22 2V15C22 15.5523 21.5523 16 21 16H2C1.44772 16 1 15.5523 1 15Z"
                    stroke="#424242"
                  />
                  <path d="M1.5 5H22" stroke="#424242" />
                  <path d="M4 9H11M4 11H10" stroke="#424242" />
                  <circle
                    cx="20"
                    cy="12"
                    r="5.5"
                    fill="white"
                    stroke="#424242"
                  />
                  <path
                    d="M20 9.5V14.5M17 12H23"
                    stroke="#424242"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div className="cardAddNew">Add new card</div>
            </div>
            <div>^</div>
          </div>

          <div className="payCardDetails">YOUR CARD DETAILS</div>
          <div className="cardinputA">
            <input
              style={
                verifyCard
                  ? { backgroundColor: "#e8f0fe" }
                  : { backgroundColor: "white" }
              }
              onChange={handleCardChange}
              name="card_num"
              type="number"
              placeholder="Card Number"
            />
          </div>
          <div className="cardinputA">
            <input
              style={
                verifyCard
                  ? { backgroundColor: "#e8f0fe" }
                  : { backgroundColor: "white" }
              }
              onChange={handleCardChange}
              name="card_name"
              type="text"
              placeholder="Card Holder Name"
            />
          </div>
          <div className="cardinputA">
            <div className="cardinpValidThru">Valid thru</div>
            <input
              style={
                verifyCard
                  ? { backgroundColor: "#e8f0fe" }
                  : { backgroundColor: "white" }
              }
              onChange={handleCardChange}
              name="card_mm"
              type="number"
              placeholder="MM"
            />
            <input
              style={
                verifyCard
                  ? { backgroundColor: "#e8f0fe" }
                  : { backgroundColor: "white" }
              }
              onChange={handleCardChange}
              name="card_yy"
              type="number"
              placeholder="YY"
            />
            <div className="cardinpcvv">
              <input
                style={
                  verifyCard
                    ? { backgroundColor: "#e8f0fe" }
                    : { backgroundColor: "white" }
                }
                onChange={handleCardChange}
                name="card_cvv"
                type="number"
                placeholder="CVV"
              />
            </div>
          </div>
          <div>
            <input type="checkbox" />
            <span className="cardSaveForLater">
              Save this card for future payments
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => handleClick()}
              className="payPasscode cardButtonPay "
              style={
                verifyCard
                  ? { backgroundColor: "#128037" }
                  : { backgroundColor: "#e5e5e5" }
              }
            >
              Pay Now ₹{price}
            </button>
            <div className="cardWeAccept">
              <div>We Accept</div>
              <div>
                <img src="./Images/Payment/visa2.svg" alt="Hi" />
              </div>
              <div>
                <img src="./Images/Payment/mastercard 2.svg" alt="Hi" />
              </div>
              <div>
                <img src="./Images/Payment/amex 2.svg" alt="Hi" />
              </div>
              <div>
                <img src="./Images/Payment/diners 2.svg" alt="Hi" />
              </div>
              <div>
                <img src="./Images/Payment/rupay 2.svg" alt="Hi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
