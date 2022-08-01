import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import axios from 'axios'
import AdminHomePage from './pages/AdminHomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage'
import HomePage from './pages/HomePage'
import ListTripPage from './pages/ListTripPage'
import LoginPage from './pages/LoginPage'
import TripDetailsPage from './pages/TripDetailsPage' 
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  }
`


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router/>
      
    </div>
  );
}

export default App;
