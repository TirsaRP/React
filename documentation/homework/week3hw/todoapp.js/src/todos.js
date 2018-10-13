import React, { Component } from 'react';
import Todo from './Todo.js';
import './App.css';

class Todos extends Component {
    render(){
        const jsx= this.props.todos.map(todo=>{
            return < Todo todo={todo} key={todo.id} doneHandler={this.props.doneHandler} deleteHandler={this.props.deleteHandler} />
        })

        return(
            <div className= 'Todos'>
                {this.props.todos.length === 0? 'No items...' : jsx}
            </div>
        );
    }
}

export default Todos; 