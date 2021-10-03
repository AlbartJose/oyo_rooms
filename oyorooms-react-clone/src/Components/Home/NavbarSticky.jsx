import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import React, { useState, useRef, useEffect } from "react";

function NavbarSticky() {
  const [roomCounter, setroomCounter] = useState(1);
  const [rooms, setrooms] = useState(false);
  const [roomsNum, setroomsNum] = useState(1);
  const [date, setonDateChange] = useState("");
  const handleRoomDIv = () => {
    setrooms(true);
  };
  console.log(date);
  let roomRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (roomRef.current && !roomRef.current.contains(event.target)) {
        setrooms(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <header className="nav-sticky">
        <img src="./images/Union.png" alt="Union" />
        <div className="nav-sticky-container">
          <input
            type="text"
            placeholder="Search by city,hotel or neighbourhood"
          />
          <RangeDatePicker
            startDate={new Date(2020, 0, 15)}
            endDate={new Date(2020, 1, 1)}
            onChange={(startDate, endDate) =>
              setonDateChange(startDate, endDate)
            }
            minDate={new Date(1900, 0, 1)}
            maxDate={new Date(2100, 0, 1)}
          />
          <div className="rooms" onClick={handleRoomDIv}>
            <p>1 Room, 1 Guest</p>
            {rooms ? (
              <div className="roomsDiv" ref={roomRef}>
                <div>
                  <p>Rooms</p>
                  <p>Guest</p>
                </div>
                <div>
                  <p>
                    Rooms <span style={{ fontWeight: "bold" }}>{roomsNum}</span>
                  </p>
                  <div className="room-counter">
                    <button
                      onClick={() => {
                        setroomCounter((prev) => prev - 1);
                      }}
                    >
                      -
                    </button>
                    <p>{roomCounter}</p>
                    <button
                      onClick={() => {
                        setroomCounter((prev) => prev + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setroomsNum((prev) => prev - 1);
                    }}
                  >
                    Delete room
                  </button>
                  <button
                    onClick={() => {
                      setroomsNum((prev) => prev + 1);
                    }}
                  >
                    Add room
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <button style={{ width: "130px", height: "48px" }}>Search</button>
        </div>
        <div className="En">
          <img src="/Images/general-Icons/LanguageShort.svg" alt="En" />
        </div>
        <div className="login-sticky">
          <img src="/images/profile.png" alt="profile" />
          <p>Login / Signup</p>
        </div>
      </header>
    </>
  );
}

export default NavbarSticky;
