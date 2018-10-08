import React, { Component } from 'react';
import Todo from './todo.js';
import './App.css';

class Todos extends Component {
    render(){
        const jsx= this.props.data.map(todo=>{
            return < Todo data={todo} key={todo.id} doneHandler={this.props.doneHandler} />
        })

        return(
            <div className= 'Todos'>
                {this.props.data.length === 0? 'No items...' : jsx}
            </div>
        );
    }
}

export default Todos; 