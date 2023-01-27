import { Component } from 'react';
import ImageGalleryItem from './modules/ImageGalleryItem';
import ImageGallery from './modules/ImageGallery';
// import Loader from './modules/Loader';
// import Button from './modules/Button';
// import Modal from './modules/Modal';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
    </div>
  );
};
