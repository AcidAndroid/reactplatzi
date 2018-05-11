import React from 'react'
import PropTypes from 'prop-types'
import Playlist from '../../components/playlist/playlist'

const Caregory = (props) => {
  return (
    <div>
        <p>{props.description}</p>
        <h2>{props.title}</h2>
        
      {
          
            <Playlist playlist={props.playlist}/> 
          
      }
    </div>
  )
}

Caregory.propTypes = {

}

export default Caregory
