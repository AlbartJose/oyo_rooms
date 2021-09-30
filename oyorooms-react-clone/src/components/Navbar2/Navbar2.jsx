import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
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
              <img src="/images/becomeMember.png" alt="becomeMember" />
            </div>
            <div>
              <img src="/images/listProperty.png" alt="becomeMember" />
            </div>
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
