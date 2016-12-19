import * as api from '../../services/api';
import * as types from './actionTypes';
import _keyBy from 'lodash/keyBy';

export function fetchPlaylists() {
  return async (dispatch, getState) => {
    try{
      const playlists = await api.fetchPlaylists();
      const playlistsById = _keyBy(playlists, (playlist) => playlist.id);
      dispatch( {  type: types.PLAYLISTS_FETCHED, playlistsById} );
    } catch (error) {
      console.error(error);
    }
  }
}
