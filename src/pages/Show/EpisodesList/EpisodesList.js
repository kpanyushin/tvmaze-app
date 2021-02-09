import PropTypes from 'prop-types';

import { episodeShape } from '../types';

import Link from '../../../components/Link';

import styles from './EpisodesList.module.scss';

const EpisodesList = ({ className, showId, episodes }) => (
  <ul className={className}>
    {episodes.map((item) => (
      <li className={styles.episode} key={item.id}>
        <Link to={`/shows/${showId}/episodes/${item.id}`}>
          S{item.season}E{item.number} - {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

EpisodesList.propTypes = {
  className: PropTypes.string,
  showId: PropTypes.string.isRequired,
  episodes: PropTypes.arrayOf(PropTypes.shape(episodeShape)).isRequired,
};

EpisodesList.defaultProps = {
  className: '',
};

export default EpisodesList;
