import React from "react";
import Header from "./header";
import Forecast from "./forecast";
import Search from "./search";
import Footer from "./footer";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Forecast />
        <Search />
        <Footer />
      </header>
    </div>
  );
}

export default App;
