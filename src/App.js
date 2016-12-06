import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlaylistList from './PlaylistList.js';

class App extends Component {
  render() {
    var playlists = [
      {
        id:1,
        name: "Playlist One",
        image: "http://www.acdc.com/templates/default/images/og_image.jpg"
      },
      {
        id:2,
        name: "Playlist Two",
        image: "https://images.genius.com/54176aed36cb6114bc46f0b70b8b02b3.1000x1000x1.jpg"
      },
      {
        id:3,
        name: "Playlist Three",
        image: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg"
      },
      {
        id:4,
        name: "Thriller",
        image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
      }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Music Store</h2>
        </div>
        <PlaylistList playlists={playlists}></PlaylistList>
      </div>
    );
  }
}

export default App;
