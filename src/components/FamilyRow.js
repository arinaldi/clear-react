import React from 'react';
import PropTypes from 'prop-types';

const FamilyRow = ({ name, price, onRemove }) => (
  <div className="container">
    <div className="sub-container">
      <span
        className="remove"
        onClick={() => {
          onRemove(name);
        }}
      >
        &times;
      </span>
      <span>{name}</span>
    </div>
    <div>{price}</div>
  </div>
);

export default FamilyRow;

FamilyRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.node,
  onRemove: PropTypes.func
};
