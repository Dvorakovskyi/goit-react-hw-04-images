import React from 'react';
import PropTypes from 'prop-types';
import { StyledImageGalleryItem, StyledImg } from './ImgGalleryItem.style';

const ImageGalleryItem = ({
  webformatURL,
  id,
  tags,
  largeImageURL,
  onClick,
}) => {
  return (
    <StyledImageGalleryItem
      key={id}
      onClick={() => onClick({ largeImageURL, tags })}
    >
      <StyledImg src={webformatURL} alt={tags} />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  id: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
