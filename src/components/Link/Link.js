import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Link.module.scss';

const Link = ({ to, children }) => (
  <RouterLink className={styles.root} to={to}>
    {children}
  </RouterLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default Link;
