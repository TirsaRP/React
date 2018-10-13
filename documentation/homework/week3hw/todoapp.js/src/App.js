import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Checkbox from './Checkbox.js';
import Data from './todo.json';
import Todos from './Todos';
import AddToDo from './AddToDo';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: Data };
    console.log(Data);

    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }


  handleDone(event) {
    const id = Number(event.target.value);
    
    const modifiedData = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    // this.setState(() => { return modifiedData });
    this.setState({todos: modifiedData});
  }
  
  handleDelete(id) {
    const modifiedData = this.state.todos.filter(todo => todo.id !== id);
    
    this.setState({todos: modifiedData});
  }

  handleAdd(event) {
    console.log(event.target);
    const todo = {
      "id": 1,
      "description": "Get out of bed",
      "deadline": "2017-09-11",
      "done": true
    }
    const modifiedData= this.state.todos.concat([todo])

    this.setState({todos:modifiedData});
    event.preventDefault();
    
   // this.setState({todos: modifiedData});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your TO DO LIST:</h1>
        </header>
        <div className="App-todo-box">
          <Todos todos={this.state.todos} doneHandler={this.handleDone} deleteHandler={this.handleDelete} />
          <AddToDo handleAdd={this.handleAdd}/>

        </div>
      </div>
    );
  }
}

export default App;
