import React, { Component } from 'react';
import './App.css';
import Checkbox from './Checkbox';
import RemoveToDo from './RemoveToDo';


class Todo extends Component {
    render () {
        const {todo, doneHandler, deleteHandler} = this.props;

        return (
            <div className= 'Todo'>
                <Checkbox checked={todo.done} id={todo.id} doneHandler={doneHandler} />
                <span className={todo.done ? 'TodoDone' :' ' }>{todo.description} </span>
                <RemoveToDo todo={todo} deleteHandler={deleteHandler} />
            </div>
        );
    }
}

export default Todo;    