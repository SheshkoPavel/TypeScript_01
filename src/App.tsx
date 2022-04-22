import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTypes from "./Components/SimpleTypes";
import TypeUnderstanding from "./Components/TypeUnderstanding";
import Interfaces from "./Components/Interfaces";
import Enum from "./Components/Enum";
import Functions from "./Components/Functions";
import UserList from "./Components/UserList";
import TodoList from "./Components/TodoList";

function App() {


  return (
      <div>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                  <UserList />
                  <hr/>
                  <TodoList />
              </header>
      </div>

      </div>
  );
}

export default App;
