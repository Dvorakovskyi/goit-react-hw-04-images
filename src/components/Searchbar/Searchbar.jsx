import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledFormBtn,
  StyledSpan,
  StyledInput,
  StyledHeader,
} from './Searchbar.styled';

class Searchbar extends React.Component {
  state = {
    request: '',
    photos: [],
  };

  handlChangeForm = event => {
    const { value } = event.currentTarget;

    this.setState({ request: value });
  };

  handlSubmitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.request);

    this.setState({ request: '' });
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handlSubmitForm}>
          <StyledFormBtn type="submit">
            <StyledSpan>Search</StyledSpan>
          </StyledFormBtn>
          <StyledInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handlChangeForm}
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
