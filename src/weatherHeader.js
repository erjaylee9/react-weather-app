import React from "react";
export default function Header(props) {
  return (
      <div className="Header">
        <div className="heading">
          <h1>
            <img
              src={props.iconUrl}
              alt={props.description}
            />
          <br /> <div id="city">{props.city} </div>
          <div id="current-time"></div>
          </h1>
          <h2>
            <span className="temperature"> {props.temperature} </span>
             
            <span className="unit">
           
               °C 
            </span>
          </h2>
        </div>
      </div>
  );
}
