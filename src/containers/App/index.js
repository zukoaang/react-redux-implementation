import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import PlaylistList from '../../components/PlaylistList';
import { fetchPlaylists } from '../../store/playlists/actions';
import { getPlaylists } from '../../store/playlists/reducer';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlaylists());
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Music Store</h2>
        </div>
        <PlaylistList playlistsArray={this.props.playlistsArray} playlistIds={this.props.playlistIds}></PlaylistList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const playlistsArray = getPlaylists(state).playlistsArray;
  const playlistIds = getPlaylists(state).playlistIds;
  return {
    playlistsArray,
    playlistIds
  }
}

export default connect(mapStateToProps)(App);
