import React, { useState } from "react";
import axios from "axios";
import Header from "./header";
import Forecast from "./forecast";
import Search from "./search";
import Footer from "./footer";

import "./weather.css";
import "./App.css";

export default function App() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Forecast />
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
