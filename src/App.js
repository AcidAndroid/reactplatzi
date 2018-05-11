import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import 'materialize-css/dist/css/materialize.css'
// import Playlist from './components/playlist/playlist';
import Home from './entries/pages/containers/home'
import datos from './api.json'


class App extends Component {
  render() {
    return (
      <div className="container">               
        <Home {...datos}/>
      </div>
    );
  }
}

export default App;
