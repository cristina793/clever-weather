import React, {useState} from "react";
import axios from"axios";
import "./Weather.css";
import "./App.js";
import FormattedDate from "./FormattedDate.js"


export default function Weather(props){
  
   const[ready, setReady]=useState(false);
   const[weatherData, setWeatherData]=useState();

   function handleResponse(response){
    
      setWeatherData(
         {
         temperature:response.data.main.temp,
          humidity:response.data.main.humidity,
          city:response.data.name,
          wind:response.data.wind.speed,
          description:response.data.weather[0].description,
          iconUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.creativefabrica.com%2Fwp-content%2Fuploads%2F2021%2F03%2F31%2Fweather-icon-illustration03-Graphics-10205167-1.jpg&tbnid=dLL2bxvENuyu9M&vet=12ahUKEwjIx6me9bSFAxXyygIHHSF2CPUQMygBegQIARBY..i&imgrefurl=https%3A%2F%2Fwww.creativefabrica.com%2Fde%2Fproduct%2Fweather-icon-illustration-03-2%2F&docid=rF6zIn6U5dmFMM&w=3400&h=2200&q=weather%20icon&ved=2ahUKEwjIx6me9bSFAxXyygIHHSF2CPUQMygBegQIARBY",
          date:new Date (response.data.dt*1000)

         }
      )
    
      setReady(true);
   }

   if (ready){  return (
    <div className="Weather "> 
    <form >
        <div className="row">
            <div className="col-9">
              <input type="search"
                     placeholder="Enter a city.."
                      className="form-control"
                       autoFocus="on"/>
             </div>
             <div className="col-3">
               <input type="submit"
                      value="Search" 
                    className="btn btn-primary w-100" />
            </div>
         </div>
    </form>
    <h1>{weatherData.city}</h1>
         <li>
            <FormattedDate date={weatherData.date}  /> </li>
         <li className="text-capitalize">{weatherData.description}</li>
      
         <div className="row">
            <div className="col-6">
             <img
                   src={weatherData.iconUrl} 
                   alt={weatherData.description}  />
             <span className="temperature">{Math.round(weatherData.temperature)}</span>
             <span className="unit">°C</span>
             </div>
             <div className="col-6">
               <ul>

                <li>Humidity:{weatherData.humidity}%</li>
               <li>Wind:{weatherData.wind}km/h</li>
               </ul>
            </div>
 </div>
 </div>)

   }
   else { 
     let city="New York";
      const apiKey="97bed167ec49bff56e6c1b63daef9c86";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

return "Loading..."}

}