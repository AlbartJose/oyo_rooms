import { Route,Switch} from "react-router-dom"
import { RoomDetails } from "../components/RoomDetail/RoomDetails";
export function RouteMain() {
    return (
      <div>
        <Switch>
          <Route path="/" exact>
            {/* <HomeMain /> */}
            abcd
          </Route>
          <Route path="/hotelDetails">
              <RoomDetails/>
          </Route>
          <Route path="/contact">Contact Page</Route>
          <Route path="/about-us">About Page</Route>
          <Route path="/services">Services Page</Route>
          <Route path="/login">Login Page</Route>
          <Route path="/payment">
            {/* <PaymentMain /> */}
            dsf
          </Route>
          <Route>
            <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
          </Route>
        </Switch>
      </div>
    );
  }
  