import React, { Component } from 'react';
import './App.css';
import Checkbox from './Checkbox.js';

class Todo extends Component {
    render () {
        const data= this.props.data;

        return (
            <div className= 'Todo'>
                <Checkbox checked= {data.done} id={data.id} doneHandler={this.props.doneHandler} />
                <span className={data.done ? 'TodoDone' :' ' }>{data.description} </span>
            </div>
        );
    }
}

export default Todo;    


console.log("hello");
