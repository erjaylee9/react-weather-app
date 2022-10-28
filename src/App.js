import React, { useState } from "react";
import axios from "axios";
import Header from "./weatherHeader";
import Forecast from "./weatherForecast";
import Footer from "./weatherFooter";
import FormattedDate from "./FormattedDate";

import "./WeatherStyles.css";
import "./App.css";



export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coords:response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

  }
function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event, props) {
  setCity(event.target.value);
  
}

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <Header
            temperature={Math.round(weatherData.temperature)}
            city={weatherData.city}
            iconUrl={weatherData.iconUrl}
          />
          <FormattedDate date={weatherData.date} />
          <Forecast
            description={weatherData.description}
            wind={weatherData.wind}
            humidity={weatherData.humidity}
            coords={weatherData.coords}
          />
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    id="city-search"
                    placeholder="Search for a city"
                    class="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    className="btn btn-primary w-100"
                    value="Search"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
