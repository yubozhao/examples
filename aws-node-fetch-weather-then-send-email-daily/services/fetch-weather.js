import fetch from 'isomorphic-fetch';

const darkSkyEndPoint = 'https://api.darksky.net/forecast';

export default (location) => {
  const requestUrl = `${darkSkyEndPoint}/${process.env.DARKSKY_API}/${location.lat},${location.lon}`;
  return fetch(requestUrl)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(res => res.currently)
    .catch((err) => {
      throw err;
    });
};
