import { Link } from "react-router-dom";
function NavbarHome() {
  return (
    <>
      <header>
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
                <img src="/images/profile.png" alt="profile" />
                <p>Login / Signup</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavbarHome;
