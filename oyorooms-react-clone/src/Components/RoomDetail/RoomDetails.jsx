import { Slider } from "./Slider";
import "./RoomDetails.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { hotels } from "../db";
import { useState, useEffect } from "react";

// import {Icons} from ".../public/Icons"



export function RoomDetails() {
  const { id } = useParams();
  const [pageData, setPageData] = useState([]);
 const [pageImg,setPageImg]=useState([])
  useEffect(() => {
    const data = hotels;
    const images=data.hotel[id-1].images
    setPageImg(images)
    // console.log(hotels.hotel);
    setPageData(data.hotel[id - 1]);
  }, []);
  // console.log(pageData.images)
console.log(pageImg);
  return (
    <div>

      <Slider arr={pageImg} />
      <>
        {/* {pageData.map((e) => { */}
        <div className="product-details-parent-div">
          <div className="product-details-child-left-div">
            <h3>{pageData.name}</h3>
            <p>{pageData.location}</p>
            <div className="spotAndWizard">
              <img
                src="/general-Icons/spoton.png"
                className="spoton"
                alt="no"
              />
              <img src="/general-Icons/wizard.png" alt="no" />
            </div>

            <p className="located">Located in {pageData.city}</p>
            <h5>Description</h5>
            <p>{pageData.description}</p>
            <p className="redFont">Read more</p>
            <h5>Amenities</h5>
            <div>
              <div className="amenities">
                <img src="/general-Icons/ac.png" alt="no" />
                <img src="/general-Icons/tv.png" alt="no" />
                <img src="/general-Icons/wifi.png" alt="no" />
              </div>
              <div className="amenities">
                <img src="/general-Icons/powerbackup.png" alt="no" />
                <img src="/general-Icons/parking.png" alt="no" />
                <img src="/general-Icons/cctv.png" alt="no" />
              </div>
            </div>
            <p className="redFont">Show more</p>
            <h4>Choose your room</h4>
            <div>
              <p className="selected-category">SELECTED CATEGORY</p>
              <div className="selected-room-div">
                <div className="spotAndGreenTick">
                  <h3>SPOT-ON NON-AC</h3>
                  <img
                    src="/general-Icons/green-tick.png"
                    className="green-tick"
                    alt=""
                  />
                </div>
                <div>
                  <img src={pageImg[0]} className="single-image-room" alt="" /> 
                </div>
              </div>
              <hr />

              <div className="selected-section">
                <h4>
                  ₹ {pageData.price}{" "}
                  <span className="line-through">
                    ₹ {pageData.price + 20758}
                  </span>
                </h4>
                <img src="/general-Icons/selected.png" alt="no" />
              </div>
              <hr />
            </div>
            <div>
              <h3>Hotel Policies</h3>
              <div className="flex">
                <div>
                  <p>Check in</p>
                  12.00 PM
                </div>
                <div>
                  <p>Check out</p>
                  11.00 AM
                </div>
              </div>
              <ul>
                <li>No unmarried couples allowed</li>
                <li>
                  Guests can check in using any local or outstation ID proof
                  (PAN card not accepted).
                </li>
                <li>
                  As a complimentary benefit, your stay is now insured by Acko.
                </li>
                <li>
                  This hotel is serviced under the trade name of Hotel Aalishan
                  as per quality standards of OYO
                </li>
              </ul>
              <div className="flex redFont policies">
                <p>View Guest Policy</p>
                <p>Find OYOS without these rules</p>
              </div>
            </div>
            <div>
              <hr />
              <h3>What's nearby</h3>
              <div className="flex">
                <img
                  src="/general-Icons/redDot.png"
                  className="redDot"
                  alt="no"
                />
                <p>{pageData.name}</p>
              </div>

              {/* <img src="" alt="" /> */}
              <div className="flex location">
                <img
                  src="/general-Icons/location.svg"
                  className="redDot"
                  alt="no"
                />
                <p>Find distance from a place</p>
              </div>
              <div className="flex map-section">
                <p className="redFont">Place to visit</p>
                <p>Restaurant</p>
                <p>Transport</p>
                <p>Shopping Mall</p>
              </div>
              <div className="flex map">
                <div>
                  <p>Gitanjali Cinema</p>
                  <p>Taj Restaurant</p>
                  <p>Hotel Nagpur Ashok</p>
                  <p>Nagpur Junction</p>
                  <p>Itwāri Railroad Station</p>
                  <p>Ajni Junction</p>
                  <p>Ramdaspeth</p>
                </div>
                <div>
                  <img
                    src="/general-Icons/map.png"
                    className="map-img"
                    alt="no"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2>Weather details</h2>
              <div className="flex weather">
                <div>
                  <p>26 Sep</p>
                  <img
                    src="/general-Icons/cloud.png"
                    className="cloud"
                    alt=""
                  />
                  <p className="celcius">32 C</p>
                  <p className="celcius">24 C</p>
                </div>
                {/* <hr /> */}
                <div>
                  <p>27 Sep</p>
                  <img
                    src="/general-Icons/cloud.png"
                    className="cloud"
                    alt=""
                  />
                  <p className="celcius">32 C</p>
                  <p className="celcius">24 C</p>
                </div>
                <div>
                  <p>28 Sep</p>
                  <img
                    src="/general-Icons/cloud.png"
                    className="cloud"
                    alt=""
                  />
                  <p className="celcius">32 C</p>
                  <p className="celcius">24 C</p>
                </div>
                <div>
                  <p>29 Sep</p>
                  <img
                    src="/general-Icons/cloud.png"
                    className="cloud"
                    alt=""
                  />
                  <p className="celcius">32 C</p>
                  <p className="celcius">24 C</p>
                </div>
                <div>
                  <p>30 Sep</p>
                  <img
                    src="/general-Icons/cloud.png"
                    className="cloud"
                    alt=""
                  />
                  <p className="celcius">32 C</p>
                  <p className="celcius">24 C</p>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details-child-right-div">
            <div className="detail-page-login flex">
              <img src="/general-Icons/details-login.png" alt="" />
              <p>LOG IN TO GET EXCLUSIVE DEALS</p>
              <button>LOGIN</button>
            </div>
            <div className=" price ">
              <h4>
                ₹ {pageData.price}{" "}
                <span className="line-through">₹ {pageData.price + 20758}</span>
              </h4>
              <p>inclusive of all taxes</p>
            </div>

            <div className="flex date-div">
              <p>Wed, 13 Oct - Fri, 29 Oct</p>
              <p>1 Room 2 Guests</p>
            </div>
            <div>
              <h5 className="shadow">SPOT ON NON-AC</h5>
            </div>
            <div className="flex coupon-div">
              <div className="flex">
                <img
                  src="/general-Icons/coupon-icon.png"
                  className="coupon-icon"
                  alt=""
                />
                <p>FINDOYO coupon applied</p>
              </div>
              <div className="flex">
                <h6>₹ -4760</h6>
                <input type="checkbox" className="green" />
              </div>
            </div>
            <div className="more-offers">MORE OFFERS</div>
            <div className="flex">
              <div className="flex wizard-div">
                <img className="w" src="/general-Icons/W.png" alt="" />
                <p>Save 5% with Wizard membership </p>
              </div>
              <div className="flex price-checkbox">
                <p>₹-713</p>
                <input type="checkbox" />
              </div>
            </div>
            <div className="special-div">
              <div className="flex special-price ">
                <p>Wizard Gold at aspecial price </p>
                <p>+₹399</p>
              </div>
              <div className="flex special-price ">
                <p>Get additional benifits upto ₹1000</p>
                <p className="line-through">₹399</p>
              </div>
            </div>

            <div className="flex saving">
              <p>Your savings</p>
              <p>₹5473</p>
            </div>
            <div className="flex saving">
              <p>total price</p>
              <p>₹13964</p>
            </div>

            <Link to={`/payment/${id}`}>
              <button className="continue-btn">Continue to Book</button>
            </Link>
            <div className="redFont">
              <p>Cancellation Policy</p>
              <p>Follow safety measures advised at the hotel</p>
              <p>By proceeding, you agree to our Guest Policies.</p>
            </div>
          </div>
        </div>
        );
        {/* })} */}
      </>
    </div>
  );
}
