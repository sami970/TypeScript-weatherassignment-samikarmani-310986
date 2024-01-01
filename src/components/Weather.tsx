import React, { useState } from "react";
import "./weather.css";
import {DisplayWeather} from "./DisplayWeather";
import {DisplayForcast} from "./DisplayForcast";


export const Weather = () => {

    const [weatherArray, setWeather] = useState([]);
    
    const [form, setForm] = useState ({
        place: "",
        type: "temperature",
        unit: "",
        direction: "",
        value: 0,
        precipitation_type: "",
        time: "",
    });

    //with callback
    const XmlHTTPRequestData = (url: string, callback: (data: []) => void) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
      
        xhr.onload = function () {
          if (xhr.status === 200) {
            const data: [] = JSON.parse(xhr.responseText);
            
            //callback
            callback(data); 
          } else {
            console.error("Request failed with status:", xhr.status);
          }
        };
      
        xhr.onerror = function () {
          console.error("Request failed");
        };
      
        xhr.send();
      };
      
      //with promise and async
      async function fetchStdData(url:string): Promise<void> {
        try {
          const response = await fetch(url);      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }      
          // Assuming the response is JSON, use await response.json() to parse it
          const data = await response.json();
      
          // Do something with the data          
          setWeather(data);
        } catch (error) {
          console.error('Error during fetch:', error);
        }
      }

    const handleChange = (
        event: React.ChangeEvent<HTMLSelectElement>) => {

        const name = event.target.name;
        const value = event.target.value; 

        if (name === "place"){
            setForm({ ...form, place:value });
        }
        if (name === "type"){
            setForm({ ...form, type:value });
        }
       
    }

    const weatherData =  (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        
        event.preventDefault();
       
        if (form.place === "") {
            alert("Add values");
        } else 
        if(form.type ==="temperature") //temperature  async/wait promise
        {
              fetchStdData(`http://localhost:8080/data/`+form.place);
             
        } else //Forcast callback
        {
          XmlHTTPRequestData(`http://localhost:8080/forecast/`+form.place, (data) => {
                let i = data.reverse();
                setWeather(i);
              });
              
        }
          
    }
    
    return (
        <div className="weather">
        <span className="title">Weather App</span>
        <br />
        <p>(Sami Karmani)</p>    
        
        <form>

            <p> Select place :
            <select id="place" name="place"  title=" Select place" onChange={(e) =>handleChange(e)}>
                <option value="Aarhus">Select city</option>
                <option value="Aarhus">Aarhus</option>
                <option value="Horsens">Horsens</option>
                <option value="Copenhagen">Copenhagen</option>
            </select>
            </p>
            <p> Select type :
            <select id="type" name="type" title ="Select type" onChange={(e) =>handleChange(e)}>
                <option value="temperature">temperature</option>
                <option value="forecast">forecast</option>                
            </select>
            </p>

            <button className="getweather" onClick={(e) => weatherData(e)}>
            Submit
            </button>
        </form>

        {form.type === "temperature" ? (
            <div>
              
                <DisplayWeather data={weatherArray}/>
           
            </div>
        
        ) :
        <div>              
            <DisplayForcast data={weatherArray}/>
        </div> }

        </div>

    );
}

