import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import React, { useState, useRef, useEffect } from "react";

function SearchField() {
  const [roomCounter, setroomCounter] = useState(1);
  const [rooms, setrooms] = useState(false);
  const handleRoomDIv = () => {
    setrooms(true);
  };

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
      <div className="red-rectangle">
        <img src="/images/redRectangle.png" alt="redRectangle" />
        <div className="search-field">
          <input
            type="text"
            placeholder="Search by city,hotel or neighbourhood"
          />
          <RangeDatePicker
            startDate={new Date(2020, 0, 15)}
            endDate={new Date(2020, 1, 1)}
          />
          <div className="rooms" onClick={handleRoomDIv}>
            <p>1 Room, 1 Guest</p>
            {rooms ? (
              <div className="roomsDiv">
                <div>
                  <p>Rooms</p>
                  <p>Guest</p>
                </div>
                <div>
                  <p>Rooms</p>
                  <div className="room-counter" ref={roomRef}>
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
                  <p>Delete room</p>
                  <p>Add room</p>
                </div>
              </div>
            ) : null}
          </div>
          <button>Search</button>
        </div>
      </div>
    </>
  );
}

export default SearchField;
