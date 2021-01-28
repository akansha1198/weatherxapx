import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";
import { connect } from 'react-redux';
//action
import{ fetchWeather} from "./actions/fetchWeather";

function App({weatherDetails}) {

const [city, setCity]= useState("");

const weatherSelector = useSelector((state)=> state.WeatherInfo);
const dispatch =  useDispatch();
const getWeatherInfo =(city) =>{ dispatch(fetchWeather(city))};


const getWeatherData =(e) => {
  e.preventDefault();
  getWeatherInfo(city);
}
  console.log(weatherDetails)
  return (
    <React.Fragment>
  <div className="App">
    <header>
      <h>React Redux WeatherApp (Powered by Hooks)</h>
    </header>
  </div>
    <main>
      <form onSubmit={getWeatherData}>
     <div className="control">
       <input type="text" name="name" placeholder="City" onChange={e => setCity(e.target.value)}/> 
       </div>
     <input type="Submit" value="Check Weather"/>
  </form>
  
   </main>
   </React.Fragment>
  );
}

const mapStateToProps = state => ({
  weatherDetails: state.weatherInfo,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { fetchWeather }
)(App);

