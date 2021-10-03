import "./Slider.css";

export function Slider({ arr }) {
  // console.log(arr[0]);
  return (
    <>
    <div className="carousel-img">
      <img src={arr[0]} alt="no" />
      <img src={arr[1]} alt="no" />
    </div>
    </>
  );
}
