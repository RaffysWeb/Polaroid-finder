import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = ({ placeholder, value, onChange, name, forwardedRef }) => (
  <StyledInput
    type="text"
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
    ref={forwardedRef}
  />
);

const StyledInput = styled.input`
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  max-width: 25rem;
  border: 0.05rem solid lightblue;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.23);

  &:focus {
    outline: none;
    border: 0.05rem solid blue;
  }
`;

TextInput.defaultProps = {
  value: '',
  placeholder: ''
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  forwardedRef: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
