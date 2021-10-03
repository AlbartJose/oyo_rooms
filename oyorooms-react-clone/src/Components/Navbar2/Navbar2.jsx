import { Link } from "react-router-dom";
// import SearchField from "../Home/SearchField";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Search = styled.div`
  & .secondred-rectangle {
    position: sticky;
  }
  & .secondred-rectangle img {
    width: 0%;
    height: 0%;
  }

  & .secondsearch-field {
    position: absolute;
    display: flex;
    top: -150%;
    /* left: 11%; */
    justify-content: center;
    align-items: center;
  }
  & .secondsearch-field input {
    width: 375px;
    height: 40px;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    padding-left: 15px;
    /* border: none; */
    margin-right: -2.5px;
    background: #ffffff;
    border-width: 1px;
    /* border-radius: 1px 0px 0px 1px; */
  }
  & .secondsearch-field input:focus {
    outline: none;
  }
  & .secondreact-google-flight-datepicker .dialog-date-picker {
    width: 700px !important;
    z-index: 0;
  }
  & .secondreact-google-flight-datepicker .date-picker {
    padding: 2px !important;
  }
  & .secondreact-google-flight-datepicker .day.selected.hovered::after {
    border-radius: 100%;
    background-color: #df293a !important;
  }
  & .secondreact-google-flight-datepicker .day.hovered {
    background: #fce0de !important;
    border-radius: unset;
  }
  & .secondreact-google-flight-datepicker .day.selected::after {
    background-color: #df293a !important;
    border-radius: 100%;
  }
  & .secondreact-google-flight-datepicker .day:hover::after {
    background-color: #fff;
    border: 2px solid #df293a !important;
    bottom: -2px;
    left: -2px;
    right: -2px;
    top: -2px;
  }
  & .secondreact-google-flight-datepicker .icon-calendar {
    fill: #df293a !important;
  }
  & .secondreact-google-flight-datepicker .date:focus,
  & .secondreact-google-flight-datepicker .date.is-focus {
    background-color: #fce0de !important;
  }
  & .secondreact-google-flight-datepicker .date.is-focus::after {
    border: 0px solid #df293a !important;
    z-index: 10000;
  }
  & .secondreact-google-flight-datepicker .dialog-footer .submit-button {
    background-color: #df293a !important;
  }
  & .secondreact-google-flight-datepicker .day .background-day.last-day {
    background: linear-gradient(to left, #fff, #fce0de) !important;
  }
  & .datepicker {
    height: 40px;
  }
  & .secondrooms {
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    margin-left: -5px;
    cursor: pointer;
  }
  & .secondrooms + button {
    width: 150px;
    height: 40px;
    background: #1ab64f;
    box-shadow: 0px 4px 4px rgba(96, 182, 126, 0.12);
    border-radius: 4px;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.015em;
    color: #ffffff;
    border: none;
    margin-left: -1px;
    cursor: pointer;
  }
  & .secondrooms + button:hover {
    background: #128037;
  }
`;

const Header = styled.header`
  & .navbar-right-section > * {
    border-right: none;
  }
`;

export const Navbar2 = () => {
  const history = useHistory();
  const [roomCounter, setroomCounter] = useState(1);
  const [rooms, setrooms] = useState(false);
  const [roomsNum, setroomsNum] = useState(1);
  const [date, setonDateChange] = useState("");
  const handleRoomDIv = () => {
    setrooms(true);
  };
  console.log(date);
  let roomRef = useRef();

  const handleLinkClick = () => {
    history.push("/hotels");
  };

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
      <Header>
        <div className="master-div-navbar">
          <div className="navbar-logo">
            <img src="/images/Union.png" alt="Union" />
          </div>
          <div className="navbar-right-section">
            <Search>
              <div className="secondred-rectangle">
                <p className="secondheading-red-rectangle">
                  {/* World’s Fastest Growing Hotel Chain */}
                </p>
                <img src="/images/redRectangle.png" alt="redRectangle" />
                <div className="secondsearch-field">
                  <input
                    type="text"
                    placeholder="Search by city,hotel or neighbourhood"
                  />
                  <RangeDatePicker
                    style={{ height: "40px" }}
                    startDate={new Date(2020, 0, 15)}
                    endDate={new Date(2020, 1, 1)}
                    // onChange={(startDate, endDate) =>
                    //   setonDateChange(startDate, endDate)
                    // }
                  />
                  <div className="secondrooms" onClick={handleRoomDIv}>
                    <p>1 Room, 1 Guest</p>
                    {rooms ? (
                      <div className="secondroomsDiv" ref={roomRef}>
                        <div>
                          <p>Rooms</p>
                          <p>Guest</p>
                        </div>
                        <div>
                          <p>
                            Rooms{" "}
                            <span style={{ fontWeight: "bold" }}>
                              {roomsNum}
                            </span>
                          </p>
                          <div className="secondroom-counter">
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
                  <button onClick={handleLinkClick}>Search</button>
                </div>
              </div>
            </Search>

            {/* <SearchField style={{ background: "none" }} /> */}
            <div>
              <img src="/general-Icons/LanguageShort.svg" alt="language" />
            </div>
            <div style={{ width: "300px", margin: 0 }}>
              <Link to="/" className="login-signup">
                <img src="/images/profile.png" alt="profile" />
                <p>Login / Signup</p>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
