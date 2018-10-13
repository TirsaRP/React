import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';


class RemoveToDo extends Component {
    render() {
        const {deleteHandler, todo} = this.props;
        return (
            <div className="removeToDo">
                <button type="button" className="removeButton" onClick={deleteHandler.bind(this, todo.id)}>
                    Remove To Do Item
                </button>


            </div>
        );

    }


}

export default RemoveToDo;