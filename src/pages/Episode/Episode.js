import PropTypes from 'prop-types';

import Link from '../../components/Link';
import Info from '../../components/Info';

import styles from './Episode.module.scss';

const Episode = ({ episode, showId, showName }) => {
  const {
    name,
    number,
    summary,
    runtime,
    airdate,
    airtime,
    image: { medium, original },
  } = episode;

  const episodeInfo = [
    {
      key: 'Show',
      value: <Link to={`/shows/${showId}`}>{showName}</Link>,
    },
    {
      key: 'Number',
      value: number,
    },
    {
      key: 'Airdate',
      value: `${new Date(`${airdate} ${airtime}`).toDateString()} at ${airtime}`,
    },
    {
      key: 'Runtime',
      value: runtime === 1 ? `${runtime} minute` : `${runtime} minutes`,
    }
  ];

  return (
    <div className={styles.root}>
      <h1 className={styles.header}>{name}</h1>
      <section className={styles.summaryWrapper}>
        <picture>
          <source media="(min-width: 320px)" srcSet={medium} />
          <img className={styles.image} src={original} alt={name} />
        </picture>
        <article
          className={styles.summary}
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <Info className={styles.episodeInfo} title="Episode Info" information={episodeInfo} />
      </section>
    </div>
  );
};

const episodeShape = {
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
  }).isRequired,
  summary: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  airdate: PropTypes.string.isRequired,
  airtime: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

Episode.propTypes = {
  episode: PropTypes.shape(episodeShape).isRequired,
  showId: PropTypes.string.isRequired,
  showName: PropTypes.string.isRequired,
};

export default Episode;
