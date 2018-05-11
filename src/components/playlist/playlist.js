import React from 'react';
import PropTypes from 'prop-types';
import Media from '../media/media'
import {  } from "../media/media.css";
import Play from '../icons/components/play'
import Pause from '../icons/components/pause'
import FullScreen from '../icons/components/fullScreen'
import Volume from '../icons/components/volume'

function Playlist(props){
        const playlist =props.data.categories[0].playlist
        console.log(playlist)
        return (
            <div className="row " >
            <Play size={50} color="red" ></Play>
            <Pause size={50} color="red" ></Pause>
            <Volume size={50} color="red" ></Volume>
            <FullScreen size={50} color="red" ></FullScreen>
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

Playlist.propTypes = {

};

export default Playlist;