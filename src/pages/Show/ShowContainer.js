import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchShow } from '../../_redux/shows/slice';
import { fetchEpisodes } from '../../_redux/episodes/slice';

import useSelector from '../../hooks/useSelector';

import {
  itemSelector as showSelector,
  isFetchingSelector as isFetchingShowSelector,
} from '../../_redux/shows/selectors';

import {
  collectionSelector as episodesSelector,
  isFetchingSelector as isFetchingEpisodesSelector,
} from '../../_redux/episodes/selectors';

import Show from './Show';
import EpisodesList from './EpisodesList';

import styles from './Show.module.scss';

const ShowContainer = () => {
  const { show_id: showId } = useParams();
  const dispatch = useDispatch();
  const show = useSelector(showSelector, showId);
  const episodes = useSelector(episodesSelector);
  const isFetchingShow = useSelector(isFetchingShowSelector);
  const isFetchingEpisodes = useSelector(isFetchingEpisodesSelector);

  const handleLoadEpisodesClick = () => {
    dispatch(fetchEpisodes(showId));
  };

  useEffect(() => {
    dispatch(fetchShow(showId));
  }, [dispatch, showId]);

  return isFetchingShow ? (
    'Loading...'
  ) : (
    <div className={styles.pageWrapper}>
      <Show
        show={show}
        episodes={episodes}
        isFetching={isFetchingShow}
        isFetchingEpisodes={isFetchingEpisodes}
        onLoadEpisodes={handleLoadEpisodesClick}
      />
      <button className={styles.button} type="button" onClick={handleLoadEpisodesClick}>
        Load full episode list
      </button>
      <EpisodesList className={styles.episodesList} showId={showId} episodes={episodes} />
    </div>
  );
};

export default ShowContainer;
