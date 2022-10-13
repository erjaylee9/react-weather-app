import React from "react";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="weather-details">
        <ul>
          <li id="description">Sunny</li>
          <li>
            {" "}
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind"></span> mph
          </li>
        </ul>
      </div>
      <div class="forecast" id="forecast">
        <div class="row">
          <div class="col-2">
            <div class="forecast-date">Monday </div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png
"
              width="60"
              alt="icon"
            />
            <div class="forecast-temperatures">
              <span class="forecast-max-temp"> 70° </span>
              <span class="forecast-min-temp"> 68° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
