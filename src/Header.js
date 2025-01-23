import React, { useState } from "react";

const Header = ({ logo }) => {
  const [newTheme, setNewTheme] = useState("dark");
  const handleClick = () => {
    if (newTheme != "dark") {
      setNewTheme("dark");
    } else {
      setNewTheme("mainTheme");
    }
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <div className="container text-center p-5 ">
      <span className="cursor-pointer no-select " onClick={handleClick}>
        <img
          src={logo}
          alt="logo"
          className="rounded-circle mb-4 invert-hover"
          height="96px"
          width="96px"
        />
      </span>
      <div className="fw-semibold fs-4"> Victor's MainPage </div>
    </div>
  );
};

export default Header;
