import React, { Component } from 'react';
import './media.css'
import PropTypes from "prop-types";
class Media extends Component {
    //Sintaxis es6
// constructor(props){
//     super(props)
//     this.handleClick= this.handleClick.bind(this)
// }

////Usnado es6 se debe hacer asi el manejo de eventos y su liga ademas usar el constructor
// handleClick(event){
//     console.log(this.props.title)
// }

//Estes construtor ya no maneja los eventos en sintaxis es7
//Maneja los estatus iniciales pero sigue siendo es6
// constructor(props){
//     super(props)
//     this.state={
//         autor:this.props.autor
//     }
// }

//Asi se manjean los estatus en es7
state={
    autor:'By POLLO LOCO'
}
//Usando es7 se manejan asi en elnace de eventos
handleClick =(event)=>{
    console.log(this.props.title)
    //Con setState se cambia el esdao
    this.setState({
        autor:'By PAVOMON'
    })
}

    render() {
        return (
            <div className="row media" onClick={this.handleClick}>
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={this.props.image} alt="Bitcoin" />
                  {/* Asi se manejan la asignacion de atributos pero SIN considerar es estado inicial */}
                  <span className="card-title">{this.props.autor}</span>                  
                </div>
                <div className="card-content">
                  <p>{this.props.title}</p>
                </div>
                {/* Asi se manejan la asignacion de atributos pero SI considerarando es estado inicial */}
                <div className="card-action">
                  <a href="#">{this.state.autor}</a>
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