import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { useHistory } from "react-router-dom";
function SearchField() {
  const history = useHistory();

  function handleClick() {
    history.push("/payment");
  }
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
            startDate={new Date(2021, 9, 1)}
            endDate={new Date(2021, 9, 5)}
          />
          <div className="rooms">
            <p>1 Room, 1 Guest</p>
          </div>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchField;
