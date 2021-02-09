import { createSlice } from '@reduxjs/toolkit';

const showsSlice = createSlice({
  name: 'shows',
  initialState: {
    collection: {},
    isFetching: true,
  },
  reducers: {
    fetchShow: (state) => {
      state.isFetching = true;
    },
    fetchShowSuccess: (state, action) => {
      state.isFetching = false;
      state.collection[action.payload.id] = action.payload;
    },
    fetchShowError: (state) => {
      state.isFetching = false;
    },
  },
});

export const {
  fetchShow,
  fetchShowError,
  fetchShowSuccess,
} = showsSlice.actions;

export default showsSlice.reducer;
