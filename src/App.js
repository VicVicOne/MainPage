import React, { useEffect, useState } from "react";
import logo from "./saitama.png";
import liLogo from "./LI-In-Bug.png";
import reactLogo from "./logo512.png";
import graffiti from "./graffit.png";
import gitHubLogo from "./github-mark.svg";
import questionIcon from "./question.webp";
import bootStrapIcon from "./question.webp";
import calcIcon from "./calc.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Header";
import LinkGroup from "./LinkGroup";

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
    { name: "GitHub", logo: gitHubLogo, url: "https://github.com/VicVicOne" },
    { name: "Calculadora", logo: calcIcon, url: "https://example.com" },
    {
      name: "Ad Wall",
      logo: graffiti,
      url: "https://vicvicone.github.io/ad-wall/",
    },
    // { name: "Bootstrap Test", logo: bootStrapIcon, url: "https://example.com" },
    // PRUEBA { name: "Game???", logo: questionIcon, url: "https://google.com" },
    {
      name: "React",
      logo: reactLogo,
      url: "https://react.dev/",
      clickSpin: true,
    },
  ];

  const [speed, setSpeed] = useState("20");

  return (
    <div className="" style={{ userSelect: "none" }}>
      <Header logo={logo} />

      <LinkGroup linksList={linksList} />
    </div>
  );
}

export default App;
