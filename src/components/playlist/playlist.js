import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Media from '../media/media'
import {  } from "../media/media.css";

class Playlist extends Component {
    render() {
        const playlist = this.props.data.categories[0].playlist
        console.log(playlist)
        return (
            <div className="row " >
            {
                playlist.map((element)=>{
                    // Asi se manda valores uno a uno
                    // return <Media key={element.id} tipo={element.type} 
                    //                 title={element.title} 
                    //                 autor={element.author} 
                    //                 image={element.cover}/>
                                    
                    // Asi se mandan con el sread operatro
                    return <Media key={element.id} {...element}/>
                })
            }                
            </div>
        );
    }
}

Playlist.propTypes = {

};

export default Playlist;