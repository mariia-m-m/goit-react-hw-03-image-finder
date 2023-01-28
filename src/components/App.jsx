import { Component } from 'react';
import ImageGalleryItem from './modules/ImageGalleryItem';
import ImageGallery from './modules/ImageGallery';
import Loader from './modules/Loader';
import Searchbar from './modules/Searchbar';
import axios from 'axios';
// import Button from './modules/Button';
// import Modal from './modules/Modal';

export class App extends Component {
  state = {
    images: [],
    search: '',
    loading: false,
    error: null,
  };

  searchImages = ({ search }) => {
    this.setState({ search: search });
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      axios
        .get(
          `https://pixabay.com/api/?q= ${search} &page=1&key=32162387-0406b1794dd4cc3a4c661920a&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => this.setState({ images: response.data.hits }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error } = this.state;
    const { searchImages } = this;
    return (
      <div>
        <Searchbar onSubmit={searchImages} />
        {error && <p>Error:{error}</p>}
        {loading && <p>Loading...</p>}
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
      </div>
    );
  }
}
