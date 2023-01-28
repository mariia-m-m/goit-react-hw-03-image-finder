import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import axios from 'axios';

const ImageGalleryItem = ({ images }) => {
  const elements = images.map(({ id, webformatURL, tags }) => (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        className={styles.ImageGAlleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  ));
  return elements;
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  images: [],
};

// Contacts.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   onFilter: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf({
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }),
// };
