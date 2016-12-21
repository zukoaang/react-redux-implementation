async function fetchPlaylists() {
  return fetch('http://playlist.jbfullstack.com/playlist/')
  .then(promise => promise.json())
  .then(result => result.data);
}
export { fetchPlaylists };
