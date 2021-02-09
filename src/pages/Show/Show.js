import PropTypes from 'prop-types';

import { showShape } from './types';

import Info from '../../components/Info';

import styles from './Show.module.scss';

function getSchedule(days, time) {
  return `Runs on ${days.join(', ')} at ${time}`;
}

const Show = ({ show }) => {
  const {
    name,
    genres,
    status,
    summary,
    schedule: { time, days },
    image: { medium, original },
    network: { name: networkName },
  } = show;

  const showInfo = [
    {
      key: 'Network',
      value: networkName,
    },
    {
      key: 'Schedule',
      value: getSchedule(days, time),
    },
    {
      key: 'Status',
      value: status,
    },
    {
      key: 'Genres',
      value: genres.join(' | '),
    },
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
        <Info className={styles.showInfo} title="Show Info" information={showInfo} />
      </section>
    </div>
  );
};

Show.propTypes = {
  show: PropTypes.shape(showShape).isRequired,
};

export default Show;
