import { createSelector } from 'reselect';

import { denormalize } from '../../utils/normalization';

export const episodesSelector = createSelector(
  (state) => state,
  (state) => state.episodes
);

export const isFetchingSelector = createSelector(
  episodesSelector,
  ({ isFetching }) => isFetching
);

export const collectionSelector = createSelector(episodesSelector, (episodes) =>
  denormalize(episodes.collection)
);

export const itemSelector = createSelector(
  episodesSelector,
  (_, id) => id,
  ({ collection }, id) => collection[id]
);
