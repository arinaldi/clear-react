import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FamilyRow from './FamilyRow';

const Family = ({ data, familyPrice, removeFamily }) => (
  <Fragment>
    <div className="container">
      <label>Family Memberships</label>
    </div>
    { data.length
      ? data.map((member, index) => (
        <FamilyRow
          key={index}
          name={member}
          price={familyPrice}
          onRemove={removeFamily}
        />))
      : <p>No family members added</p>
    }
  </Fragment>
);

export default Family;

Family.propTypes = {
  data: PropTypes.array, 
  familyPrice: PropTypes.node, 
  removeFamily: PropTypes.func
};
