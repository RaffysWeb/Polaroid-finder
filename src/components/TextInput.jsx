import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ placeholder, value, onChange, name, forwardedRef }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
    ref={forwardedRef}
  />
);

TextInput.defaultProps = {
  value: ''
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  forwardedRef: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
