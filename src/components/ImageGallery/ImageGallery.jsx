import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImgGallary.styled';

const ImageGallery = ({ data, onClick }) => {
  return (
    <StyledImageGallery>
      {data.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          data={data}
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
