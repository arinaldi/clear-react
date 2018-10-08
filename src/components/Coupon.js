import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import '../styles/Coupon.css';

class Coupon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coupon: props.appliedCoupon || ''
    };

    this.onChange = this.onChange.bind(this);
    this.applyCoupon = this.applyCoupon.bind(this);
    this.removeCoupon = this.removeCoupon.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({
      coupon: value.toUpperCase()
    });
  }

  applyCoupon() {
    const { onAdd } = this.props;
    const { coupon } = this.state;

    onAdd(coupon);
  }

  removeCoupon() {
    const { onRemove } = this.props;

    onRemove();
    this.setState({ coupon: '' });
  }

  render() {
    const { appliedCoupon, promos } = this.props;
    const { coupon } = this.state;
    const wasApplied = coupon && coupon === appliedCoupon;
    const isDisabled = !(coupon.trim() && promos[coupon]);
    const inputClassName = promos[coupon] ? '' : 'Coupon-invalid';
    const buttonClassName = isDisabled ? 'Button-disabled' : '';

    if (wasApplied) {
      return (
        <div className="container">
          <span>{appliedCoupon}</span>
          <Button
            label="Remove"
            onClick={this.removeCoupon}
          />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Input
            className={inputClassName}
            value={coupon}
            onChange={this.onChange}
            placeholder="Promo Code"
          />
          <Button
            className={buttonClassName}
            label="Apply"
            disabled={isDisabled}
            onClick={this.applyCoupon}
          />
        </div>
      );
    }
  }
}

export default Coupon;

Coupon.propTypes = {
  appliedCoupon: PropTypes.string, 
  promos: PropTypes.object,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};
