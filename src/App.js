import React from "react";
import Header from "./header";
import Forecast from "./forecast";
import Search from "./search";
import Footer from "./footer";

import "./weather.css";
import "./App.css";


function App() {
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
}

export default App;
