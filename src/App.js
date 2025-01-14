import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Link from "./Link";

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
      logo: logo,
      url: "https://www.linkedin.com/in/victor-gonzalez-6b9386343/",
    },
    { name: "Example", logo: logo, url: "https://example.com" },
    { name: "Google", logo: logo, url: "https://google.com" },
    { name: "Tokyo", logo: logo, url: "https://es.wikipedia.org/wiki/Tokio" },
    { name: "Madrid", logo: logo, url: "https://es.wikipedia.org/wiki/Madrid" },
  ];

  const [speed, setSpeed] = useState("20");

  return (
    <div className="" style={{ userSelect: "none" }}>
      <div className="container text-center p-5 ">
        <span className="cursor-pointer no-select" onClick={handleClick}>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              animation: `App-logo-spin infinite ${speed}s linear`,
            }}
          />
          Victor's MainPage
        </span>
      </div>

      <div className="container text-center p-5 ">Container here!</div>

      {linksList.map((link, index) => (
        <>
          <Link key={index} {...link} />
        </>
      ))}
    </div>
  );
}

export default App;
