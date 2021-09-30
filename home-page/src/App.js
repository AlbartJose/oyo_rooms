import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Locations from "./components/Locations";
import NavbarHome from "./components/NavbarHome";
import SearchField from "./components/SearchField";
import WorldwideMarketing from "./components/WorldwideMarketing";

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <Locations />
      <SearchField />
      <Banner />
      <WorldwideMarketing />
      <Footer />
    </div>
  );
}

export default App;