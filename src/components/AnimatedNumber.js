import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AnimatedNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      isAnimating: false
    };
    this.animateValue = this.animateValue.bind(this);
  }

  componentDidUpdate() {
    if(this.props.value !==this.state.value) {
      setTimeout(this.animateValue, 60);
    }
  }

  animateValue() {
    const { value: stateValue } = this.state;
    const { value: propsValue } = this.props;
    let nextValue = propsValue;
    
    if (propsValue > stateValue) {
      nextValue = stateValue + Math.ceil((propsValue - stateValue)/10) ;
    } else if (propsValue < stateValue) {
      nextValue = stateValue - Math.ceil((stateValue - propsValue)/10) ;
    }

    this.setState({ value: nextValue });	
  }
	
  render() {
    const { value } = this.state;

    return <span>{`$${value}`}</span>;
  }
}

AnimatedNumber.propTypes = {
  value: PropTypes.number
};
