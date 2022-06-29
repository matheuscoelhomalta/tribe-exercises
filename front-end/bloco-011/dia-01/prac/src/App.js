import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;