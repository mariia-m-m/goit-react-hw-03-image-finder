import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChage = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}></span>
          </button>
          <label htmlFor="search">
            <input
              className={styles.SearchFormInput}
              onChange={this.handleChage}
              name="search"
              value={search}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              required
            />
          </label>
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
