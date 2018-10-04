import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Checkbox from './Checkbox.js';
import Data from './todo.json';
import Todos from './todos.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: Data };
    console.log(Data);

    this.handleDone = this.handleDone.bind(this);
  }

  handleDone(event) {
    const id = Number(event.target.value);

    const modifiedData = this.state.data.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return true;
    });
    this.setState(() => { return modifiedData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your TO DO LIST:</h1>
        </header>
        <div className="App-todo-box">
          <Todos data={this.state.data} doneHandler={this.handleDone} />
        </div>
      </div>
    );
  }
}

export default App;
