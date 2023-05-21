import React from 'react';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchPhotos } from 'Api/Api';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { StyledApp } from './App.styled';

export const App = () => {
  const [request, setRequest] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largePhotos, setLargePhotos] = useState(null);

  useEffect(() => {
    if (request === '') {
      return;
    }

    setIsLoader(true);

    fetchPhotos(request, page)
      .then(data => {
        if (data.hits.length === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );

          return;
        }
        return setPhotos([...photos, ...data.hits]);
      })
      .catch(error => setError(error.massage))
      .finally(() => {
        setIsLoader(false);
      });
  }, [request, page]);

  const handleSubmit = query => {
    if (query !== '') {
      setRequest(query);
    } else {
      Notify.info('I`m waiting for your request');
    }

    if (request !== query) {
      setPhotos([]);
    }
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = ({ largeImageURL, tags }) => {
    setIsShowModal(true);

    const modalPhoto = {
      largeImageURL,
      tags,
    };

    setLargePhotos(modalPhoto);
  };

  const closeModal = () => {
    setIsShowModal(false);

    setLargePhotos(null);
  };

  return (
    <StyledApp>
      {error && Notify.failure('Something went wrong, please try again later')}
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery data={photos} onClick={openModal} />
      {photos.length > 0 && <LoadMoreBtn onClick={handleLoadMoreClick} />}
      {isLoader && <Loader />}
      {isShowModal && (
        <Modal onClick={closeModal}>
          <img src={largePhotos.largeImageURL} alt={largePhotos.tags} />
        </Modal>
      )}
    </StyledApp>
  );
};
