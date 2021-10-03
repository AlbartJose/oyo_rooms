import "./Home.css";

import Banner from "./Banner";
import Footer from "./Footer";
import Locations from "./Locations";
import StickyNavbar from "./StickyNavbar";
import NavbarHome from "./NavbarHome";
import SearchField from "./SearchField";
import WorldwideMarketing from "./WorldwideMarketing";

function HomeMain() {
  return (
    <div className="App">
      <StickyNavbar />
      <NavbarHome />
      <Locations />
      <SearchField />
      <Banner />
      <WorldwideMarketing />
      <Footer />
    </div>
  );
}

export default HomeMain;
