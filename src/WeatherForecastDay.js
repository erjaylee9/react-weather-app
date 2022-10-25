import React from "react";

export default function WeatherForecastDay(props) {

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        return days[day];
    }
    

    return (
        <div>
            <div className="forecast-date">{day()} </div>
            <img src={props.data.weather[0].icon} alt={props.data.weather[0].description} />
            <div className="forecast-temperatures">
                <span className="forecast-max-temp">
                    {maxTemperature()}
                </span>
                <span className="forecast-min-temp">
                    {minTemperature()}
                </span>
            </div>
        </div>
    );
}