import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
function SearchField() {
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
          <div className="rooms">
            <p>1 Room, 1 Guest</p>
          </div>
          <button>Search</button>
        </div>
      </div>
    </>
  );
}

export default SearchField;
