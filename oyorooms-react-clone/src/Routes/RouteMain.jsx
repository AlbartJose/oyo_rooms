import { Route, Switch } from "react-router-dom";
import { PaymentMain } from "../Components/Payment/PaymentMain";
import HomeMain from "../Components/Home/HomeMain";
import { RoomDetails } from "../Components/RoomDetail/RoomDetails";
import { HotelOptions } from "../Components/HotelOptions";

export function RouteMain() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomeMain />
        </Route>
        <Route path="/hotels">
          <HotelOptions />
        </Route>
        <Route path="/hoteldetail">
          <RoomDetails />
        </Route>
        <Route path="/contact">Contact Page</Route>
        <Route path="/about-us">About Page</Route>
        <Route path="/services">Services Page</Route>
        <Route path="/login">Login Page</Route>
        <Route path="/payment">
          <PaymentMain />
        </Route>
        <Route>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
