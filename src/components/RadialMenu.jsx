import React, { useState } from "react";

function RadialMenu({ lables, onZodiacClick }) {
  const [isActive, setIsActive] = useState(0);

  const totalItems = lables.length;
  const angleStep = (2 * Math.PI) / totalItems;
  const radius = 200; // Radius of the circle
  const center = { x: -30, y: -30 }; // Center coordinates of the circle

  const getPosition = (index) => {
    const angle = (index / totalItems) * 2 * Math.PI;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    return { x, y };
  };
  return (
    <div className="radial-menu">
      <img src="./public/logo.png" alt="" className="logo" />
      {lables.map((label, index) => {
        const position = getPosition(index);
        const active = isActive === index;
        return (
          <div
            style={{ top: position.y, left: position.x }}
            onClick={() => {
              onZodiacClick(label.name);
              setIsActive(index);
            }}
            key={label.name}
            className={`sign-button menu-item ${active ? "active-button" : ""}`}
          >
            {label.sign}
          </div>
        );
      })}
    </div>
  );
}

export default RadialMenu;
