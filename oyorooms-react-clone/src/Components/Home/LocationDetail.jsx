import { useState } from "react";
function LocationDetail(props) {
  const [div, setdiv] = useState(false);
  const handleEvent = () => {
    setdiv(true);
  };
  return (
    <>
      <div
        className="down"
        onMouseEnter={handleEvent}
        onMouseLeave={() => {
          setdiv(false);
        }}
      >
        <p>{props.name}</p>
        <img src="/Images/down.png" alt="down" />
      </div>

      {div ? (
        <div
          className="dropdown"
          onMouseEnter={handleEvent}
          onMouseLeave={() => {
            setdiv(false);
          }}
        >
          {props.more.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default LocationDetail;
