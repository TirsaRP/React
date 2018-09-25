import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox.js';
//import Checkbox2 from './Checkbox2.js';
//import data from './todo.json'; 

class App extends Component {
  constructor(props){
  super(props);

  let data = require('./todo.json');
  console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your TO DO LIST:</h1>
        </header>
        <div className="App-todo-box">
          <Checkbox />
        </div>
      </div>
    );
  }
}

export default App;
