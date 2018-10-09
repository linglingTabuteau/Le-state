import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      working : true
    };
    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      working : !state.working
  }));
  }
  render() {
    const homerTravaille = this.state.working ? 'true' : 'false';
    const logoTransform = this.state.working ? 'App-logo' : 'new-logo';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoTransform} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}
           className={homerTravaille}>
           {homerTravaille.toUpperCase()}
          </button> 
        </header>
    
        <Lamp on />
        <Lamp />

        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;
