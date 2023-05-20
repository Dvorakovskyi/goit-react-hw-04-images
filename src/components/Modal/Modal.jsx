import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { StyledOverlay, StyledModal } from './Modal.styled';

const modalEl = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <StyledOverlay onClick={this.closeModal}>
        <StyledModal>{children}</StyledModal>
      </StyledOverlay>,
      modalEl
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
