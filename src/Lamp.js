// Lamp.js
import React, {Component} from 'react';

class Lamp extends Component {
    constructor(props){
        super(props);
        this.state = {
            on : props.on
            
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){
        this.setState(state => ({
            on : !state.on
        }));
    }

    render(){
        const light = this.state.on ? 'on' : 'off';
        return (
            <div className= "Lamp">
                <button 
                    onClick={this.handleClick} 
                    className={light}>
                    {light.toUpperCase()}
                </button>
                <figure className= {light} />
            </div>
        );
    }
}

export default Lamp;