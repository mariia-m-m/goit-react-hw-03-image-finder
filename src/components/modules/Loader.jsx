import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

class Loader extends Component {
  state = {
    loader: false,
  };
  componentDidMount() {
    this.setState({ loader: true });
  }

  render() {
    const { loader } = this.state;
    return <>{loader && <p>Loading...</p>}</>;
  }
}

export default Loader;
