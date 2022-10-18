import React, { useState } from "react";
import axios from "axios";
import Header from "./weatherHeader";
import Forecast from "./weatherForecast";
import Search from "./weathertSearch";
import Footer from "./weatherFooter";

import "./Weather.css";
import "./App.css";

export default function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name,
    });
     setReady(true);
    
  }
  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <Header temperature={Math.round(weatherData.temperature)} city={weatherData.city} />
          <Forecast wind={weatherData.wind} />
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
