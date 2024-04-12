import React from "react";

export default function WeatherTemperature(props){
    return (<div className="WeatherTemperature"> 
             <span className="temperature">
              <span className="unit">°C</span> {Math.round(props.celsius)}</span>
           </div>)
}