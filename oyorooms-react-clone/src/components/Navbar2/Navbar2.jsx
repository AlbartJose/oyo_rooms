import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  /* display: flex; */

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
`;
export const Navbar2 = () => {
  return (
    <>
      <Header>
        <div className="master-div-navbar">
          <div className="navbar-logo">
            <img src="/images/Union.png" alt="Union" />
          </div>
          <div className="navbar-right-section">
            <div>
              <img src="/images/language.png" alt="language" />
            </div>
            <div>
              <Link to="/" className="login-signup">
                <img src="/images/loginLOGO.png" alt="loginLOGO" />
                <p>Login / Signup</p>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
