import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTypes from "./Components/SimpleTypes";
import TypeUnderstanding from "./Components/TypeUnderstanding";
import Interfaces from "./Components/Interfaces";

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <SimpleTypes />
          <TypeUnderstanding />
          <Interfaces />
      </header>
    </div>
  );
}

export default App;
