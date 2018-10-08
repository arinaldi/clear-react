import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Input.css';

const Input = ({ className = '', value, onChange, onKeyPress, placeholder }) => (
  <input
    className={`Input ${className}`}
    type="text"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
  />
);

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string
};
