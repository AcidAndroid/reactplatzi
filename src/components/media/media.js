import React, { Component } from 'react';
import './media.css'
import PropTypes from "prop-types";
class Media extends Component {
    //Sintaxis es6
// constructor(props){
//     super(props)
//     this.handleClick= this.handleClick.bind(this)
// }

////Usnado es6 se debe hacer asi el manejo de eventos y usar el constructor
// handleClick(event){
//     console.log(this.props.title)
// }

//Usando es7

handleClick =(event)=>{
    console.log(this.props.title)
}

    render() {
        return (
            <div className="row media" onClick={this.handleClick}>
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={this.props.image} alt="Bitcoin" />
                  <span className="card-title">{this.props.autor}</span>
                </div>
                <div className="card-content">
                  <p>{this.props.title}</p>
                </div>
                <div className="card-action">
                  <a href="#">Link a otro caso</a>
                </div>
              </div>
            </div>
          </div>
            
        );
    }
}
Media.propTypes ={
    image:PropTypes.string,
    title:PropTypes.string,
    autor:PropTypes.string,
    tipo:PropTypes.oneOf(['video','audio']).isRequired,
}
export default Media;