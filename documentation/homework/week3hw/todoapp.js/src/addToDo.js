import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
class AddToDo extends Component {
   
    render () {

        return (
            <form className="addToDo" onSubmit={this.props.handleAdd}>   
            
                <input type="text" className="addText" />

            
            
            </form>
        );

    }


}

export default AddToDo;