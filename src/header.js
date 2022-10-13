import React from "react";
export default function Header() {
  return (
    <div className="container">
      <div ClassName="Header">
        <div className="heading">
          <h1>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png
"
              id="icon"
              alt="icon"
            />
            <br /> <div id="city">New York</div>
            <div id="current-time">Tuesday 16:00</div>
          </h1>
          <h2>
            <span className="temperature" id="temperature">
              {" "}
              80{" "}
            </span>
            <span className="temps">
              {" "}
              <sup> °F </sup>{" "}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
