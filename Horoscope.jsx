import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/dist";

function Horoscope() {
  const lables = [
    { name: "Aries", sign: "♈︎" },
    { name: "Taurus", sign: "♉︎" },
    { name: "Gemini", sign: "♊︎" },
    { name: "Cancer", sign: "♋︎" },
    { name: "Leo", sign: "♌︎" },
    { name: "Virgo", sign: "♍︎" },
    { name: "Libra", sign: "♎︎" },
    { name: "Scorpio", sign: "♏︎" },
    { name: "Sagittarius", sign: "♐︎" },
    { name: "Capricorn", sign: "♑︎" },
    { name: "Aquarius", sign: "♒︎" },
    { name: "Pisces", sign: "♓︎" },
  ];

  const totalItems = lables.length;
  const angleStep = (2 * Math.PI) / totalItems;
  const radius = 190; // Radius of the circle
  const center = { x: 200, y: 200 }; // Center coordinates of the circle

  const getPosition = (index) => {
    const angle = (index / totalItems) * 2 * Math.PI;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    return { x, y };
  };

  const [horoscope, setHoroscope] = useState({});

  async function handleZodiacClick(zodiacSign) {
    try {
      console.log(zodiacSign);
      const res = await fetch(`http://localhost:4000/${zodiacSign}`);
      const data = await res.json();
      console.log(data);
      setHoroscope(data);
    } catch (error) {}
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:4000/leo`);
        const data = await res.json();
        console.log(data);
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
          <h1 className="sign-name">{horoscope.sign}</h1>
          <p className="date">{horoscope.date}</p>
          <p className="horoscope-content">
            {horoscope.prediction?.split(".").slice(0, 6).toString()}
          </p>
        </div>
        <div className="horoscope-menu radial-menu">
          {lables.map((label, index) => {
            const position = getPosition(index);
            return (
              <div
                style={{ top: position.y, left: position.x }}
                onClick={() => handleZodiacClick(label.name)}
                key={label.name}
                className="sign-button menu-item"
              >
                {label.sign}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
