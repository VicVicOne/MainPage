import React, { useEffect, useState } from "react";
import logo from "./saitama.png";
import liLogo from "./LI-In-Bug.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Link from "./Link";
import Header from "./Header";

function App() {
  useEffect(() => {
    document.title = "Victor's MainPage";
  }, []);

  const handleClick = () => {
    console.log("Button clicked! " + speed);
    setSpeed(speed / 4);
    if (speed < 0.04) {
      setSpeed("20");
      window.open("https://react.dev/", "_blank");
      return;
    }
  };

  const linksList = [
    {
      name: "LinkedIn",
      logo: liLogo,
      url: "https://www.linkedin.com/in/victor-gonzalez-6b9386343/",
    },
    { name: "Example", logo: logo, url: "https://example.com" },
    { name: "Google", logo: logo, url: "https://google.com" },
    { name: "Tokyo", logo: logo, url: "https://es.wikipedia.org/wiki/Tokio" },
    { name: "Madrid", logo: logo, url: "https://es.wikipedia.org/wiki/Madrid" },
    { name: "React", logo: logo, url: "https://react.dev/" },
  ];

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

  const [speed, setSpeed] = useState("20");

  return (
    <div className="" style={{ userSelect: "none" }}>
      <div className="container text-center p-5 ">
        <span className="cursor-pointer no-select" onClick={handleClick}>
          <img
            src={logo}
            alt="logo"
            className="rounded-circle"
            height="96px"
            width="96px"
          />
          <h4> Victor's MainPage </h4>
        </span>
      </div>

      {linksList.map((link, index) => (
        <>
          <Link key={index} {...link} />
        </>
      ))}
      <div className="container text-center p-5 ">
        <ul class="list-group w-100 w-md-100 mx-auto">
          <li class="list-group-item m-2 rounded-4 p-3 border-0 ">
            <img
              src={liLogo}
              alt="name"
              style={{ width: "40px", marginRight: "5px" }}
            />
            LinkedIn
          </li>
          <li class="list-group-item m-2 rounded-3 p-3">A second item</li>
          <li class="list-group-item m-2 rounded-3 p-3">A third item</li>
          <li class="list-group-item m-2 rounded-3 p-3">A fourth item</li>
          <li class="list-group-item m-2 rounded-3 p-3">And a fifth one</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
