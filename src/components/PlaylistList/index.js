import React, { Component } from 'react';
import Playlist from '../Playlist';
import './index.css';

class PlaylistList extends Component {
  render() {
    return(
      <div className='PlaylistList'>
        {
          this.props.playlists.map(playlist => {
            return <Playlist key={playlist.id} name={playlist.name} image={playlist.image}></Playlist>
          })
        }
      </div>
    )
  }
}

export default PlaylistList;
