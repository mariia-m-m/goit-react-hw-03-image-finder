import { Component } from 'react';

import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const ImageGallery = ({ children }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>{children}</ul>
    </>
  );
};

export default ImageGallery;

// Contacts.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   onFilter: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf({
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }),
// };
