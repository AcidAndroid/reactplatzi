import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import 'materialize-css/dist/css/materialize.css'
import Media from './components/media/media';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Media title="¿que es rd?" autor="By Pollo" image="../images/bitcoin.jpg" />
      </div>
    );
  }
}

export default App;
