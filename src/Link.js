import React from "react";

const Link = ({ name, logo, url }) => (
  <div className="container text-center p-2">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={logo}
        alt={name}
        style={{ width: "50px", marginRight: "5px" }}
      />
      {name}
    </a>
  </div>
);

export default Link;
