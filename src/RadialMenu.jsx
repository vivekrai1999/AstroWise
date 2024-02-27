// import React, { useEffect } from "react";

// const RadialMenu = ({ labels }) => {
//   useEffect(() => {
//     const numberOfItems = labels.length;
//     const angleStep = 360 / numberOfItems;
//     const radius = 190; // Radius of the circle
//     const parentDiv = document.getElementById("parentdiv");
//     const parentSize = parentDiv.offsetWidth;
//     const offsetToParentCenter = parseInt(parentSize / 2);
//     const circleSize = 70; // Size of each circle
//     const totalOffset = offsetToParentCenter - circleSize / 2;

//     for (let i = 0; i < numberOfItems; ++i) {
//       const childDiv = document.createElement("div");
//       childDiv.className = "menu-item";
//       const angle = angleStep * i * (Math.PI / 180);
//       const x = radius * Math.cos(angle);
//       const y = radius * Math.sin(angle);
//       childDiv.style.top = `${y + totalOffset}px`;
//       childDiv.style.left = `${x + totalOffset}px`;
//       childDiv.style.width = `${circleSize}px`;
//       childDiv.style.height = `${circleSize}px`;
//       childDiv.textContent = labels[i]; // Set text content
//       parentDiv.appendChild(childDiv);
//     }
//   }, [labels]);

//   return (
//     <div id="parentdiv" className="radial-menu">
//       {/* Child divs will be dynamically created */}
//     </div>
//   );
// };

// export default RadialMenu;
