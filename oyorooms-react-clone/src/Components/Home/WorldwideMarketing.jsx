import React, { useState } from "react";

function WorldwideMarketing() {
  const [uae, setuae] = useState(false);
  const [nepal, setnepal] = useState(false);
  const [china, setchina] = useState(false);
  const [india, setindia] = useState(false);
  const [malayasia, setmalayasia] = useState(false);
  const [indo, setindo] = useState(false);
  const handleUae = () => {
    setuae(true);
  };
  const handlenepal = () => {
    setnepal(true);
  };
  const handlechina = () => {
    setchina(true);
  };
  const handleindia = () => {
    setindia(true);
  };
  const handlemalayasia = () => {
    setmalayasia(true);
  };
  const handleindo = () => {
    setindo(true);
  };
  return (
    <>
      <div className="world-wide">
        <div>
          <div>
            <img
              src="/images/landing background map.png"
              alt="landing background map"
            />
            {uae ? <div className="uaeDiv">UAE</div> : null}
            <img
              src="/images/uae.png"
              alt="uae"
              className="uae"
              onMouseEnter={handleUae}
              onMouseLeave={() => {
                setuae(false);
              }}
            />
            {nepal ? <div className="nepalDiv">Nepal</div> : null}
            <img
              src="/images/nepal.png"
              alt="nepal"
              className="nepal"
              onMouseEnter={handlenepal}
              onMouseLeave={() => {
                setnepal(false);
              }}
            />
            {china ? <div className="chinaDiv">China</div> : null}
            <img
              src="/images/china.png"
              alt="china"
              className="china"
              onMouseEnter={handlechina}
              onMouseLeave={() => {
                setchina(false);
              }}
            />
            {india ? <div className="indiaDiv">India</div> : null}
            <img
              src="/images/india.png"
              alt="india"
              className="india"
              onMouseEnter={handleindia}
              onMouseLeave={() => {
                setindia(false);
              }}
            />
            {malayasia ? <div className="malayasiaDiv">Malayasia</div> : null}
            <img
              src="/images/malayasia.png"
              alt="malayasia"
              className="malayasia"
              onMouseEnter={handlemalayasia}
              onMouseLeave={() => {
                setmalayasia(false);
              }}
            />
            {indo ? <div className="indoDiv">Indonesia</div> : null}
            <img
              src="/images/indonesia.png"
              alt="indonesia"
              className="indonesia"
              onMouseEnter={handleindo}
              onMouseLeave={() => {
                setindo(false);
              }}
            />
          </div>
        </div>
        <div className="world-wide-right-section">
          <p>World’s leading chain of hotels and homes</p>
          <p>More Destibations More Ease. More Affordable.</p>
          <div>
            <p>
              <span>80</span>
              <br />
              Countries
            </p>
            <p>
              <span>45000+</span> <br />
              Hotels
            </p>
            <p>
              <span>150,000</span> <br />
              Vacation Homes
            </p>
          </div>
          <ul>
            <li>India</li>
            <li>China</li>
            <li>Nepal</li>
            <li>Indonesia</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WorldwideMarketing;
