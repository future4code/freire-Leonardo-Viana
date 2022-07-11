import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import axios from 'axios'

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
    </div>
  );
}

export default App;
