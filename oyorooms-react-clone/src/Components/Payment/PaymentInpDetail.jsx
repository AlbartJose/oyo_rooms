import "./PaymentStyle.css";

export function PaymentInpDetail({ setCardOpen }) {
  return (
    <div className="payInpClosed">
      <div className="payInpClosedB1">
        <div>
          <div className="payInpSq">1</div>
          <div>Your Details</div>
        </div>
        <div
          onClick={() => {
            setCardOpen(false);
          }}
          className="payInpModify"
        >
          Modify
        </div>
      </div>
      <div>
        <div>Soumik</div>
        <div>|</div>
        <div>daka0014@gmail.com</div>
        <div>|</div>
        <div>8373011634</div>
      </div>
    </div>
  );
}
