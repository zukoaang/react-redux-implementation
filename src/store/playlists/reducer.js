import * as types from './actionTypes';
import _mapKeys from 'lodash/mapKeys';
import _mapValues from 'lodash/mapValues';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    playlistsById: {},
    currentPlaylist: undefined
  }
);

export default function reduce(state = initialState, action = {}){
  switch (action.type) {
    case types.PLAYLISTS_FETCHED:
      return state.merge({
        playlistsById: action.playlistsById
      })
    default: return state

  }
}

export function getPlaylists(state) {
  let playlistsById = state.playlistsById;
  let playlistIds = _mapKeys(state.playlistsById);
  // console.dir({playlistsById, playlistIds});
}
