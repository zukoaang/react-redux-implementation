import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import PlaylistList from '../../components/PlaylistList';
import { fetchPlaylists } from '../../store/playlists/actions';
import { getPlaylists } from '../../store/playlists/reducer';
import { connect } from 'react-redux';

class App extends Component {
  componentWillReceiveProps() {
    this.props.dispatch(fetchPlaylists());
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Music Store</h2>
        </div>
        <PlaylistList playlists={this.props.playlists}></PlaylistList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.dir(state.playlistsReducer)
  return {playlists: getPlaylists(state.playlistsReducer)}
}

export default connect(mapStateToProps)(App);
