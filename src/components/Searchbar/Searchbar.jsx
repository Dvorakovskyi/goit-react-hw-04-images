import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledFormBtn,
  StyledSpan,
  StyledInput,
  StyledHeader,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handlChangeForm = event => {
    const { value } = event.currentTarget;

    setRequest(value);
  };

  const handlSubmitForm = event => {
    event.preventDefault();

    onSubmit(request);

    setRequest('');
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handlSubmitForm}>
        <StyledFormBtn type="submit">
          <StyledSpan>Search</StyledSpan>
        </StyledFormBtn>
        <StyledInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={request}
          onChange={handlChangeForm}
        />
      </StyledForm>
    </StyledHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
