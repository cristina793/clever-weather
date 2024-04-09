import React, {useState} from "react";
import axios from "axios";

export default function Weather(){



    return (
    <div className="Weather"> 
    <form >
        <div className="row">
            <div className="col-9">
              <input type="search"
                     placeholder="Enter a city.."
                      className="form-control" />
             </div>
             <div className="col-3">
               <input type="submit"
                      value="Search" 
                    className="btn btn-primary" />
            </div>
         </div>
    </form>
    <h1>New York</h1>
       <ul>
         <li>Wednesday 07:00</li>
         <li>Mostly Cloudy</li>
      </ul>

         <div className="row">
            <div className="col-6">
             <img
                   src={Weather.icon} 
                   alt="weather icon"  />
              6 °C
             </div>
             <div className="col-6">
               <ul>
                <li>Precipitation</li> 
                <li>Humidity</li>
               <li>Wind</li>
               </ul>
            </div>
 </div>
 </div>)
}