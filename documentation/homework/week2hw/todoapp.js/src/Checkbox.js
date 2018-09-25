import React, { Component } from 'react';
import data from './todo.json'; 

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A To-Do was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log(this.state.description);
        return (
            <div className='Checkbox'>
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox" name="toDo1" value="Get out of Bed" onChange={this.handleChange}  /> Get out of bed<br />
                    <input type="checkbox" name="toDo2" value="Brush Teeth" onChange={this.handleChange}  /> Brush teeth<br />
                    <input type="checkbox" name="toDo3" value="Eat Breakfast" onChange={this.handleChange}  /> Eat breakfast<br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}




export default Checkbox;