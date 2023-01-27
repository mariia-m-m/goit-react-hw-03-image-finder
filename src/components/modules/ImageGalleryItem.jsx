import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from '../styles.module.css';
import axios from 'axios';

class ImageGalleryItem extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?q=cat&page=1&key=32162387-0406b1794dd4cc3a4c661920a&image_type=photo&orientation=horizontal&per_page=12'
      )
      .then(({ data }) => {
        this.setState({ images: data.hits });
      });
  }

  render() {
    const { images } = this.state;
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
  }
}
export default ImageGalleryItem;

// Contacts.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   onFilter: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf({
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }),
// };
