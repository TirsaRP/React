import React, { Component } from 'react';
import './App.css'
//import Data from './todo.json'; 

class Checkbox extends React.Component {
    render() {
        const inputProps = {
            type: "checkbox",
            value: this.props.id,
            onClick: this.props.doneHandler,
            defaultChecked: this.props.checked
        }
        
        return (
            <div className='Checkbox'>
              <input {... inputProps} />
            </div>
        );
    }
}




export default Checkbox;