import React, { Component } from 'react';
import './index.css';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <h3>{this.props.name}</h3>
        <div className="Playlist-img" style={{backgroundImage: `url(${this.props.image})`}} />
      </div>
    )
  }
}

export default Playlist;
