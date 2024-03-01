import React, { useEffect, useState } from "react";
import debounce from "debounce";

function RadialMenu({ center, radius, labels, onZodiacClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuItemSize, setMenuItemSize] = useState(getMenuItemSize());

  useEffect(() => {
    const handleResize = debounce(() => {
      setMenuItemSize(getMenuItemSize());
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  function getMenuItemSize() {
    if (window.innerWidth < 768) {
      return 50;
    } else if (window.innerWidth > 768 && window.innerWidth < 1165) {
      return 70;
    } else {
      return 100;
    }
  }

  //const menuItemSize = getMenuItemSize();
  const adjustmentValue = menuItemSize / 2;

  return (
    <div className="radial-menu">
      <img
        src="./public/sun.png"
        alt=""
        className="logo"
        style={{ top: center.y, left: center.x }}
      />
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
