import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from"axios";
import WeatherForecastDay from"./WeatherForecastDay.js";

export default function WeatherForecast(props){
    let [loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);

    
    
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded){
        return(
        <div className="WeatherForecast">
        <div className="row">
        <div className="col">
           <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
    </div>);
   
}else{
   
        let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey="97bed167ec49bff56e6c1b63daef9c86";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
return null;
 }}