import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques : 0,
      clicks : 0,
      clicksCounter: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.buttonOnFire = this.buttonOnFire.bind(this);
  }
  // Função 1
  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  // Função 2
  buttonClicked = () => {
    this.setState((estadoAnterior, _props) => ({
      clicks: estadoAnterior.clicks +1
    }))
  } 
  
  // Função 3
  buttonOnFire = () => {
    this.setState((estadoAnterior, _props) => ({
      clicksCounter: estadoAnterior.clicksCounter +1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Botão1-{this.state.numeroDeCliques}</button>
        <button onClick={this.buttonClicked}>Botão2-{this.state.clicks} </button>
        <button onClick={this.buttonOnFire}>Botão3-{this.state.clicksCounter}</button>
      </div>
    );
  }
}

export default App;
