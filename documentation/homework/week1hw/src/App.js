import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo.js';

let toDoList = {
  toDoItems: [{
    item: 'Get out of bed', dayOfWeek: 'Wednesday', date: 'Sep 13 2017'
  },
  {
    item: 'Brush teeth', dayOfWeek: 'Thursday', date: 'Sep 14 2017'
  },
  {
    item: 'Eat breakfast', dayOfWeek: 'Friday', date: 'Sep 15 2017'
  }
  ]
}; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       
        {toDoList.toDoItems.map((toDoItem, i)=> <ToDo toDoItem={toDoItem} key={i}/>)}
      </div>
    );
  }
}

export default App;
