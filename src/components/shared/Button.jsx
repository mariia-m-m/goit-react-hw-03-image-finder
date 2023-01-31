import styles from '../styles.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return <button onClick={loadMore}>Load more</button>;
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
