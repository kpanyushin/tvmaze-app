import axios from 'axios';

const BASE_URL = 'http://api.tvmaze.com/shows';

export function fetchShow(showId = '6771') {
  return axios.get(`${BASE_URL}/${showId}`);
}

export function fetchEpisodes(showId = '6771') {
  return axios.get(`${BASE_URL}/${showId}/episodes`);
}
