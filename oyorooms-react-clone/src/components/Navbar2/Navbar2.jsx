import { Link } from "react-router-dom";
import styled from "styled-components";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import Button from "@mui/material/Button";

const Header = styled.header`
  /* display: flex; */

  z-index: 100;
  & .master-div-navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  & .navbar-logo {
    padding: 20px;
  }
  & .navbar-right-section {
    display: flex;
    align-items: center;
  }
  & .navbar-right-section > * {
    border-right: 1px solid rgba(0, 0, 0, 0.08);
  }
  & .navbar-right-section div:nth-of-type(4) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
  }
  & .navbar-right-section div:nth-of-type(4) p {
    margin-left: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.015em;
  }
  & .login-signup {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    font-weight: bolder;
    border-bottom: none;
  }
  & .red-rectangle {
    position: relative;
  }
  & .red-rectangle img {
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  & .search-field {
    position: absolute;
    display: flex;
    left: 11%;
    justify-content: center;
    align-items: center;
    /* margin-right: 100px; */
  }
  & .search-field input {
    width: 500px;
    height: 60px;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    padding-left: 15px;
    border: none;
    margin-right: -2.5px;
    background: #ffffff;
    border-radius: 4px 0px 0px 4px;
  }
  & .search-field input:focus {
    outline: none;
  }
  & .react-google-flight-datepicker .dialog-date-picker {
    width: 700px !important;
    z-index: 10;
  }
  & .react-google-flight-datepicker .date-picker {
    padding: 2px !important;
  }

  & .rooms {
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin-left: -5px;
  }
  & .rooms + button {
    width: 171px;
    height: 60px;
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
  }
`;
export const Navbar2 = () => {
  return (
    <>
      <Header>
        <div className="master-div-navbar">
          <div className="navbar-logo">
            <img src="/images/Union.png" alt="Union" />
          </div>
          {/* <Div>
            <div className="search-field">
              <input
                type="text"
                placeholder="Search by city,hotel or neighbourhood"
              />
            </div>
            <div>
              <RangeDatePicker
                startDate={new Date(2020, 0, 15)}
                endDate={new Date(2020, 1, 1)}
              />
            </div>
            <div className="rooms">
              <p>1 Room, 1 Guest</p>
            </div>
            <div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#1AB64F",
                  height: "70%",
                  marginLeft: "20px",
                }}
                Book
                Now
              >
                Search
              </Button>
            </div>
          </Div> */}
          <div className="navbar-right-section">
            <Div>
              <div className="search-field">
                <input
                  type="text"
                  placeholder="Search by city,hotel or neighbourhood"
                />
              </div>
              <div>
                <RangeDatePicker
                  startDate={new Date(2020, 0, 15)}
                  endDate={new Date(2020, 1, 1)}
                />
              </div>
              <div className="rooms">
                <p>1 Room, 1 Guest</p>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#1AB64F",
                    height: "70%",
                    marginLeft: "20px",
                  }}
                  Book
                  Now
                >
                  Search
                </Button>
              </div>
            </Div>
            <div>
              <img src="/images/language.png" alt="language" />
            </div>
            <div>
              <Link to="/" className="login-signup">
                {/* <img src="/images/loginLOGO.png" alt="loginLOGO" /> */}
                <p>Login / Signup</p>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
