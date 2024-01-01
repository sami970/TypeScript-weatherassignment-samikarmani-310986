import React, { useState,useEffect } from "react";
import "./DisplayWeather.css";

import {Iprops} from  "../Utils/types";

const  selectCityObject=
{
  action : "Please Select a city..."
};

 export const DisplayForcast = (props :Iprops ) => {
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
                Forcast {props.data[currentIndex].place}  {props.data[currentIndex].time}
              </span>           
              
            </div>
            <div className="weatherdetails">
              <div className="section1">
                <table>
                <tbody> 
                <tr>
                    <td>
                      <h4>Type</h4>
                      <span>{props.data[currentIndex].type}</span>
                    </td>
                    <td>
                      <h4>From</h4>
                      <span>{props.data[currentIndex].from}</span>
                    </td>
                    <td>
                      <h4>To</h4>
                      <span>{props.data[currentIndex].to}</span>                      
                    </td>
                    <td>
                      <h4>Unit</h4>
                      <span>{props.data[currentIndex].unit}</span>
                    </td>
                                 
                </tr>             
                <tr>
                    <td>
                      <h4>Type</h4>
                      <span>{props.data[currentIndex+1].type}</span>
                    </td>
                    <td>
                      <h4>From</h4>
                      <span>{props.data[currentIndex+1].from}</span>
                    </td>
                    <td>
                      <h4>To</h4>
                      <span>{props.data[currentIndex+1].to}</span>                      
                    </td>
                    <td>
                      <h4>Unit</h4>
                      <span>{props.data[currentIndex+1].unit}</span>
                    </td>
                                 
                </tr>                 
                <tr>
                    <td>
                      <h4>Type</h4>
                      <span>{props.data[currentIndex+2].type}</span>
                    </td>
                    <td>
                      <h4>From</h4>
                      <span>{props.data[currentIndex+2].from}</span>
                    </td>
                    <td>
                      <h4>To</h4>
                      <span>{props.data[currentIndex+2].to}</span>                      
                    </td>
                    <td>
                      <h4>Unit</h4>
                      <span>{props.data[currentIndex+2].unit}</span>
                    </td>                                 
                </tr>   
                <tr>
                    <td>
                      <h4>Type</h4>
                      <span>{props.data[currentIndex+3].type}</span>
                    </td>
                    <td>
                      <h4>From</h4>
                      <span>{props.data[currentIndex+3].from}</span>
                    </td>
                    <td>
                      <h4>To</h4>
                      <span>{props.data[currentIndex+3].to}</span>                      
                    </td>
                    <td>
                      <h4>Unit</h4>
                      <span>{props.data[currentIndex+3].unit}</span>
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
   


