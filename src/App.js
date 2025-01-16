import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

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
      <Header />

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
      <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center ">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex gap-3 py-3 rounded-3"
            aria-current="true"
          >
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">List group item heading</h6>
                <p class="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small class="opacity-50 text-nowrap">now</small>
            </div>
          </a>
          <div>podpsdo</div>
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex gap-3 py-3 rounded-3"
            aria-current="true"
          >
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">Another title here</h6>
                <p class="mb-0 opacity-75">
                  Some placeholder content in a paragraph that goes a little
                  longer so it wraps to a new line.
                </p>
              </div>
              <small class="opacity-50 text-nowrap">3d</small>
            </div>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">Third heading</h6>
                <p class="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
              <small class="opacity-50 text-nowrap">1w</small>
            </div>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://github.com/twbs.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">Third heading</h6>
                <p class="mb-0 opacity-75">
                  Some placeholder content in a paragraph.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div class="list-group list-group-checkable d-grid gap-2 border-0">
          <div class="list-group-item list-group-item-action rounded-0 py-3">
            Test
            <span class="d-block small opacity-50">
              With support text underneath to add more detail
            </span>
          </div>
          <div class=" list-group-item list-group-item-action  gap-3 py-5">
            Test
            <span class="d-block small opacity-50">
              With support text underneath to add more detail
            </span>
          </div>
          <label
            class="list-group-item rounded-3 py-3"
            for="listGroupCheckableRadios1"
          >
            First radio
            <span class="d-block small opacity-50">
              With support text underneath to add more detail
            </span>
          </label>
          <label
            class="list-group-item rounded-3 py-3"
            for="listGroupCheckableRadios1"
          >
            First radio
            <span class="d-block small opacity-50">
              With support text underneath to add more detail
            </span>
          </label>
          1
          <input
            class="list-group-item-check pe-none"
            type="radio"
            name="listGroupCheckableRadios"
            id="listGroupCheckableRadios2"
            value=""
          />
          <label
            class="list-group-item rounded-3 py-3"
            for="listGroupCheckableRadios2"
          >
            Second radio
            <span class="d-block small opacity-50">
              Some other text goes here
            </span>
          </label>
          <input
            class="list-group-item-check pe-none"
            type="radio"
            name="listGroupCheckableRadios"
            id="listGroupCheckableRadios3"
            value=""
          />
          <label
            class="list-group-item rounded-3 py-3"
            for="listGroupCheckableRadios3"
          >
            Third radio
            <span class="d-block small opacity-50">
              And we end with another snippet of text
            </span>
          </label>
          <input
            class="list-group-item-check pe-none"
            type="radio"
            name="listGroupCheckableRadios"
            id="listGroupCheckableRadios4"
            value=""
            disabled=""
          />
          <label
            class="list-group-item rounded-3 py-3"
            for="listGroupCheckableRadios4"
          >
            Fourth disabled radio
            <span class="d-block small opacity-50">
              This option is disabled
            </span>
          </label>
        </div>
      </div>

      {linksList.map((link, index) => (
        <>
          <Link key={index} {...link} />
        </>
      ))}
    </div>
  );
}

export default App;
