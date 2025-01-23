import React, { useState } from "react";

const Link = ({ name, logo, url, clickSpin }) => {
  const [speed, setSpeed] = useState(0);

  const handleClick = () => {
    if (clickSpin) {
      if (speed == 0) {
        setSpeed(15);
      } else if (speed < 0.04) {
        setSpeed(15);
        window.open(url, "_blank");
      } else {
        setSpeed(speed / 4);
      }
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <li
      className="list-group-item custom m-2 rounded-4 p-3 cursor-pointer fw-semibold list-group-item-action hover-grow"
      onClick={handleClick}
    >
      <img
        src={logo}
        alt={name}
        style={{
          height: "40px",
          marginRight: "5px",
          animation: `App-logo-spin infinite ${speed}s linear`,
        }}
      />
      {name}
    </li>
  );
};

export default Link;
