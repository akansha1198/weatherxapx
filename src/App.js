import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux';
import './App.css'
//action
import { fetchWeather } from "./actions/fetchWeather";
import Weather from './Weather'
import Dashboard from './Dashboard'

function App() {

  return (
    <React.Fragment>
     <Dashboard />
    </React.Fragment>
  );
}


export default App;

