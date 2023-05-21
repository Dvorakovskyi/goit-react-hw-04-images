import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { StyledOverlay, StyledModal } from './Modal.styled';

const modalEl = document.querySelector('#modal-root');

const Modal = ({ onClick, children }) => {
 
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

    const closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <StyledOverlay onClick={closeModal}>
      <StyledModal>{children}</StyledModal>
    </StyledOverlay>,
    modalEl
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Modal;
