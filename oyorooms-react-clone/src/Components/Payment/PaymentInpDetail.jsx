import "./PaymentStyle.css";

export function PaymentInpDetail({ setCardOpen, user }) {
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
        <div>{user.name}</div>
        <div>|</div>
        <div>{user.email}</div>
        <div>|</div>
        <div>{user.mobile}</div>
      </div>
    </div>
  );
}
