import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ className = '', label, onClick, disabled }) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
