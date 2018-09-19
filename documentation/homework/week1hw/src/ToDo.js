import React, { Component } from 'react';


class ToDo extends Component {
   
render() {
    console.log(this.props.toDoItem)
    return (
        <div className='ToDo'>
         To Do: {this.props.toDoItem.item} &nbsp; 
         Day of the Week: {this.props.toDoItem.dayOfWeek} &nbsp;
         Deadline Date: {this.props.toDoItem.date}
        </div>
    );
}
}




export default ToDo; 