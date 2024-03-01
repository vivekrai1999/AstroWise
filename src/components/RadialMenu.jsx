import React, { useState } from "react";

function RadialMenu({ center, radius, labels, onZodiacClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPosition = (index) => {
    const angle = (index / labels.length) * 2 * Math.PI;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    return { x, y };
  };

  const handleClick = (index, labelName) => {
    onZodiacClick(labelName);
    setActiveIndex(index);
  };

  const getMenuItemSize = () => {
    if (window.innerWidth < 768) {
      return 50;
    } else if (window.innerWidth > 768 && window.innerWidth < 1165) {
      return 70;
    } else {
      return 100;
    }
  };

  const menuItemSize = getMenuItemSize();
  const adjustmentValue = menuItemSize / 2; // Calculate adjustment value

  return (
    <div className="radial-menu">
      {labels.map((label, index) => {
        const position = getPosition(index);
        return (
          <div
            key={index}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            style={{
              top: position.y - adjustmentValue,
              left: position.x - adjustmentValue,
              width: menuItemSize,
              height: menuItemSize,
            }}
            onClick={() => handleClick(index, label.name)}
          >
            {label.sign}
          </div>
        );
      })}
    </div>
  );
}

export default RadialMenu;
