import React from "react";
import axios from "axios";


export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
    
  }
  let apiKey = "6c5621af472ccc1d447bcf74c7a52dd4";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
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
