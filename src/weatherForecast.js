import React, {useState} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
  }
  

  if (loaded) {
    console.log(forecast);
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
              <WeatherForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );

  } else {
    let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
