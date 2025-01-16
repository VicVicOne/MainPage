import React from "react";
import alien from "./alien-svgrepo-com.svg";

const Header = () => (
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img
          src={alien}
          className="bi me-1"
          alt="alien"
          width="40"
          height="32"
        />

        <span class="fs-4">Victor's MainPage</span>
      </a>
    </header>
  </div>
);

export default Header;
