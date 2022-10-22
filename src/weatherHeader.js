import React,{useState} from "react";
export default function Header(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {

    return (
      <div className="Header">
        <div className="heading">
          <h1>
            <img src={props.iconUrl} alt={props.description} />
            <br /> <div id="city">{props.city} </div>
            <div id="current-time"></div>
          </h1>
          <h2>
            <span className="temperature"> {props.temperature} </span>

            <span className="unit">°C |<a href="/" onClick={showFahrenheit}>°F </a></span>
          </h2>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.temperature * 9) / 5 + 32;
    return (
      <div className="Header">
        <div className="heading">
          <h1>
            <img src={props.iconUrl} alt={props.description} />
            <br /> <div id="city">{props.city} </div>
            <div id="current-time"></div>
          </h1>
          <h2>
            <span className="temperature"> {Math.round(fahrenheit)} </span>
            <span className="unit"> <a href="/" onClick={showCelsius}>°C</a>{" "} | °F</span>
          </h2>
        </div>
      </div>
    );
  }
}
