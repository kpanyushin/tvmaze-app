import { createSelector } from 'reselect';

import { denormalize } from '../../utils/normalization';

export const showsSelector = createSelector(
  (state) => state,
  (state) => state.shows
);

export const isFetchingSelector = createSelector(
  showsSelector,
  ({ isFetching }) => isFetching
);

export const collectionSelector = createSelector(showsSelector, (shows) =>
  denormalize(shows.collection)
);

export const itemSelector = createSelector(
  showsSelector,
  (_, id) => id,
  ({ collection }, id) => collection[id]
);
