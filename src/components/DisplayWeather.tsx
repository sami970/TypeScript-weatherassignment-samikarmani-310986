import React, { useState,useEffect } from "react";
import "./DisplayWeather.css";
import "../Utils/types";
import {Iprops} from  "../Utils/types";
const  selectCityObject=
{
  action : "Please Select a city..."
};

 export const DisplayWeather = (props :Iprops ) => {
    console.log({props})

    const [currentIndex, setCurrentIndex]= useState<number>(0);

    const handlePrevClick = () => {
      if (currentIndex >0 ) {
        setCurrentIndex(currentIndex -4);
        
      }
    };
    
    const handleNextClick = () => {
      if (currentIndex < props.data.length -4){
        setCurrentIndex(currentIndex +4)
      
      }
    };

    return (
      <div className="displayweather">
        {props.data.length !== 0 ? (
          <React.Fragment>

            <div>
            <span className="cardtitle">
              <button onClick={handlePrevClick}>Previous</button>
              <button onClick={handleNextClick}>Next</button>
            </span> 
            </div>  

            <div className="maincard">
              <span className="cardtitle">
                {props.data[currentIndex].place} {props.data[currentIndex].time}
              </span>           
              
            </div>
            <div className="weatherdetails">
              <div className="section1">
                <table>
                <tbody>              
                <tr>
                    <td>
                      <h4>Temperature</h4>
                      <span>{props.data[currentIndex].value}</span>
                    </td>
                                 
                </tr>
                  <tr>
                    <td>
                      <h4>Precipitation</h4>
                      <span>{props.data[currentIndex+1].value} </span>
                    </td>
                   
                </tr>

                  <tr>
                    <td>
                  <h4>Wind speed</h4>
                  <span> {props.data[currentIndex+2].value} </span>
                    </td>
                  </tr>   

                <tr>
                  <td>
                  <h4>Cloud coverage</h4>
                  <span> {props.data[currentIndex+3].value} </span>
                  </td>
                </tr>                     

                </tbody>
                </table>
              </div>
  
              <div className="section2">
                <table>
                  <tbody>
                  
                <tr>
                  <td>
                  <h4>Unit</h4>
                  <span>{"C"}</span>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                  <h4>Unit</h4>
                  <span>{"mm"}</span>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                  <h4>Unit</h4>
                  <span>{"m/s"}</span>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                  <h4>Unit</h4>
                  <span>{"%"}</span>
                  </td>
                  
                </tr>
                 
                  
                  </tbody>
                </table>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="maincard">
            <h2>{selectCityObject.action}</h2>
          </div>
        )}
      </div>
    );
  
  }
   


