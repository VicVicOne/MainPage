import React, { useState } from "react";

const Header = ({ logo }) => {
  /*<span className="cursor-pointer no-select" onClick={handleClick}>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              animation: `App-logo-spin infinite ${speed}s linear`,
            }}
          />
          <h2> Victor's MainPage </h2>
        </span>*/

  const [speed, setSpeed] = useState(20);

  const handleClick = () => {
    console.log("Button clicked! " + speed);
    setSpeed(speed / 4);
    if (speed < 0.04) {
      setSpeed("20");
      window.open("https://react.dev/", "_blank");
      return;
    }
  };

  return (
    <div className="container text-center p-5 ">
      <span className="cursor-pointer no-select" onClick={handleClick}>
        <img
          src={logo}
          alt="logo"
          className="rounded-circle mb-4"
          height="96px"
          width="96px"
        />
      </span>
      <div className="fw-semibold fs-4"> Victor's MainPage </div>
    </div>
  );
};

export default Header;
