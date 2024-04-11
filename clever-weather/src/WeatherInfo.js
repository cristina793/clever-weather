import React from"react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js"
export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
         <li>
            <FormattedDate date={props.data.date}  /> </li>
         <li className="text-capitalize">{props.data.description}</li>
      
         <div className="row">
            <div className="col-6">
             <WeatherIcon code={props.data.icon}  />
             <span className="temperature">{Math.round(props.data.temperature)}</span>
             <span className="unit">°C</span>
             </div>
             <div className="col-6">
               <ul>

                <li>Humidity:{props.data.humidity}%</li>
               <li>Wind:{props.data.wind}km/h</li>
               </ul>
            </div>
 </div>
 </div>);
    
}