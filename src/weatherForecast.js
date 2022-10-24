import React from "react";
export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="weather-details">
        <ul>
          <li id="description">{props.description}</li>
          <li>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{props.wind} </span> mph
          </li>
        </ul>
      </div>
      <div className="forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <div className="forecast-date">Monday </div>
            <img src={props.iconUrl} alt={props.description} />
            <div className="forecast-temperatures">
              <span className="forecast-max-temp"> 70° </span>
              <span className="forecast-min-temp"> 68° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
