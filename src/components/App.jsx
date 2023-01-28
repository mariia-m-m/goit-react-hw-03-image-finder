import { Component } from 'react';
import ImageGalleryItem from './modules/ImageGalleryItem';
import ImageGallery from './modules/ImageGallery';
import Loader from './modules/Loader';
import Searchbar from './modules/Searchbar';
import { getImages } from './shared/api';

// import Button from './modules/Button';
// import Modal from './modules/Modal';

export class App extends Component {
  state = {
    images: [],
    search: '',
    loading: false,
    error: null,
    page: 1,
  };

  searchImages = ({ search }) => {
    this.setState({ search: search });
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      getImages(search, page)
        .then(data =>
          this.setState(prevState => ({
            images: [...data.hits, ...prevState.images],
          }))
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, error } = this.state;
    const { searchImages, loadMore } = this;
    return (
      <div>
        <Searchbar onSubmit={searchImages} />
        {error && <p>Error:{error}</p>}
        {loading && <p>Loading...</p>}
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {images.length > 0 && <button onClick={loadMore}>Load more</button>}
      </div>
    );
  }
}
