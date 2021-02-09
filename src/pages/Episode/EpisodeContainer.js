import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import useSelector from '../../hooks/useSelector';

import { itemSelector as showSelector } from '../../_redux/shows/selectors';
import { itemSelector as episodeSelector } from '../../_redux/episodes/selectors';

import { fetchShow } from '../../_redux/shows/slice';
import { fetchEpisodes } from '../../_redux/episodes/slice';

import Episode from './Episode';

const EpisodeContainer = () => {
  const dispatch = useDispatch();
  const { episode_id, show_id } = useParams();
  const show = useSelector(showSelector, show_id);
  const episode = useSelector(episodeSelector, episode_id);

  useEffect(() => {
    if (!show) {
      dispatch(fetchShow(show_id));
    }

    if (!episode) {
      dispatch(fetchEpisodes(show_id));
    }
  }, [dispatch, episode, show, show_id]);

  return episode ? (
    <Episode episode={episode} showId={show_id} showName={show.name} />
  ) : (
    'Loading...'
  );
};

export default EpisodeContainer;
