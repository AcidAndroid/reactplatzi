import React, { Component } from 'react';
import './media.css'

class Media extends Component {
    render() {
        return (
            <div className="row media">
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

export default Media;