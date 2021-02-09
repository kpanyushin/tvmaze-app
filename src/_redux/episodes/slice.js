import { createSlice } from '@reduxjs/toolkit';

import { normalize } from '../../utils/normalization';

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    collection: {},
    isFetching: true,
  },
  reducers: {
    fetchEpisodes: (state) => {
      state.isFetching = true;
    },
    fetchEpisodesSuccess: (state, action) => {
      state.isFetching = false;
      state.collection = normalize(action.payload);
    },
    fetchEpisodesError: (state) => {
      state.isFetching = false;
    },
  },
});

export const {
  fetchEpisodes,
  fetchEpisodesError,
  fetchEpisodesSuccess,
} = episodesSlice.actions;

export default episodesSlice.reducer;
