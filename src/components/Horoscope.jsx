import React, { useEffect, useRef, useState } from "react";
import RadialMenu from "./RadialMenu";
import { lables } from "../data/lables";
import { ThreeDots } from "react-loader-spinner";

function Horoscope() {
  const parentRef = useRef(null);
  const [horoscope, setHoroscope] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const parentRect = parentRef.current.getBoundingClientRect();
    const newCenter = {
      x: parentRect.width / 2,
      y: parentRect.height / 2,
    };
    setCenter(newCenter);
    setRadius(Math.min(parentRect.width, parentRect.height) * 0.4);
  }, []);

  async function handleZodiacClick(zodiacSign) {
    try {
      setisLoading(true);
      const res = await fetch(`http://localhost:4000/${zodiacSign}`);
      const data = await res.json();
      setHoroscope(data);
      setisLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:4000/${lables[0].name}`);
        const data = await res.json();
        setHoroscope(data);
      } catch (error) {}
    }
    getData();
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <span>AstroWise</span>
      </div>
      <div className="content">
        <div className="horoscope">
          {isLoading ? (
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#fff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <div className="horoscope-data">
              <h1 className="sign-name">{horoscope.sign}</h1>
              <p className="date">{horoscope.date}</p>
              <p className="horoscope-content">
                {horoscope.prediction?.split(".").slice(0, 6).toString()}
              </p>
            </div>
          )}
        </div>
        <div className="horoscope-menu" ref={parentRef}>
          <RadialMenu
            labels={lables}
            center={center}
            radius={radius}
            onZodiacClick={handleZodiacClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
