import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";
//action
import{ fetchWeather} from "./actions/fetchWeather";

function App() {

const [city, setCity]= useState("");

const weatherSelector = useSelector((state)=> state.WeatherInfo);
const dispatch =  useDispatch();
const getWeatherInfo =(city) => dispatch(fetchWeather(city));


const getWeatherInfo =(e) => {
  e.preventDefault();
  console.log("Your Search");
  console.log(city);
  console.log(weatherSelector.weatherinfo)
}


  return (
    <React.Fragment>
  <div className="App">
    <header>
      <h>React Redux WeatherApp (Powered by Hooks)</h>
    </header>
  </div>
    <main>
      <form onSubmit={getWeatherInfo}>
     <div className="control">
       <input type="text" name="name" placeholder="City" onChange={e => setCity(e.target.value)}/> 
       </div>
     <input type="Submit" value="Check Weather"/>
  </form>
  
   </main>
   </React.Fragment>
  );
}

export default App;

