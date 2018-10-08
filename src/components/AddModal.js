import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import '../styles/AddModal.css';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange({ target: { value }}) {
    this.setState({ firstName: value });
  }

  handleKeyPress({ key, target: { value } }) {
    if (key === 'Enter' && value) {
      this.handleAdd();
    }
  }

  handleAdd() {
    const { onAdd } = this.props;
    const { firstName } = this.state;

    onAdd(firstName.trim());
  }

  render() {
    const { family, onClose } = this.props;
    const { firstName } = this.state;
    const isDisabled = !firstName.trim() || family.includes(firstName);
    const buttonClassName = isDisabled ? 'Button-disabled' : '';

    return (
      <div className="AddModal">
        <div className="AddModal-content">
          <h1 className="title">Add Family Member</h1>
          <Input
            value={firstName}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="First Name"
          />
          <div className="AddModal-wrapper">
            <Button
              label="Add"
              className={buttonClassName}
              disabled={isDisabled}
              onClick={this.handleAdd}
            />
            <Button
              label="Close"
              className="AddModal-close"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddModal;

AddModal.propTypes = {
  family: PropTypes.array,
  onAdd: PropTypes.func, 
  onClose: PropTypes.func
};
