import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTypes from "./Components/SimpleTypes";
import TypeUnderstanding from "./Components/TypeUnderstanding";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <SimpleTypes />
          <TypeUnderstanding />
      </header>
    </div>
  );
}

export default App;
