import React, { useState } from "react";
import axios from "axios";
import Header from "./weatherHeader";
import Forecast from "./weatherForecast";
import Search from "./weathertSearch";
import Footer from "./weatherFooter";
import FormattedDate from "./FormattedDate";

import "./Weather.css";
import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
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
          />
          <Search />
        </div>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "6c5621af472ccc1d447bcf74c7a52dd4";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading..";
  }
}
