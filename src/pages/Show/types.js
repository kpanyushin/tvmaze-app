import PropTypes from 'prop-types';

/* eslint-disable import/prefer-default-export */
export const episodeShape = {
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
  }),
  summary: PropTypes.string,
  runtime: PropTypes.number.isRequired,
  airdate: PropTypes.string.isRequired,
  airtime: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  season: PropTypes.number.isRequired,
};

export const showShape = {
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
  }).isRequired,
  summary: PropTypes.string.isRequired,
  network: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  schedule: PropTypes.shape({
    time: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  status: PropTypes.string.isRequired,
};
