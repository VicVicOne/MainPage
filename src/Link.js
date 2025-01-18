import React from "react";

const Link = ({ name, logo, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <li
      className="list-group-item m-2 rounded-4 p-3 border-0 cursor-pointer fw-semibold list-group-item-action hover-grow"
      onClick={handleClick}
    >
      <img
        src={logo}
        alt={name}
        style={{ height: "40px", marginRight: "5px" }}
      />
      {name}
    </li>
  );
};

export default Link;
