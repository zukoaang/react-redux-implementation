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
  const playlistsArray = [];
  _mapValues(state.playlists.playlistsById, o => {
      playlistsArray.push({id: o.id, name: o.name, image: o.image })
  });
  const playlistIds = [];
  _mapKeys(state.playlists.playlistsById , (value, key) => {
    playlistIds.push(key);
  });
   return {playlistsArray, playlistIds};
}
