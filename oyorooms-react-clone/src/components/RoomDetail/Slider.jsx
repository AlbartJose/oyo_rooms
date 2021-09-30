import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Slider.css"

export function Slider({arr}){
  // console.log(arr[0]);
    return<>
        <Carousel>
            <Carousel.Item>
            <div className="carousel-img">
              <img
                className="d-block w-100"
                src={arr[0]}
                alt="First slide"
              />
              <img
                className="d-block w-100"
                src={arr[1]}
                alt="Second slide"
              />
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
            <div className="carousel-img">
              <img
                className="d-block w-100"
                src={arr[2]}
                alt="Third slide"
              />
              <img
                className="d-block w-100"
                src={arr[3]}
                alt="Fourth slide"
              />
              </div>
            </Carousel.Item>
           
            <Carousel.Item>
            <div className="carousel-img">
              <img
                className="d-block w-100"
                src={arr[4]}
                alt="Fifth slide"
              />
              <img
                className="d-block w-100"
                src={arr[5]}
                alt="Sixth slide"
              />
              </div>
            </Carousel.Item>
            
            
    </Carousel>
    </>
}