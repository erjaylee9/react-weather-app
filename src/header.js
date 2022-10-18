import React from "react";
export default function Header(props) {
  return (
      <div className="Header">
        <div className="heading">
          <h1>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png
"
              id="icon"
              alt="icon"
            />
          <br /> <div id="city">{props.weatherData.city} </div>
            <div id="current-time">Tuesday 16:00</div>
          </h1>
          <h2>
            <span className="temperature"> {props.weatherData.temperature} </span>
             
            <span className="unit">
           
               °C 
            </span>
          </h2>
        </div>
      </div>
  );
}
