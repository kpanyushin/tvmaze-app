import classes from 'classnames';
import PropTypes from 'prop-types';

import styles from './Info.module.scss';

const Info = ({ className, title, information }) => (
  <div className={classes(className, styles.root)}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.itemsList}>{information.map(({ key, value }) => (
      <li key={key} className={styles.item}>{key}: {value}</li>
    ))}</ul>
  </div>
);

Info.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Info.defaultProps = {
  className: '',
};

export default Info;
