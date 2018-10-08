import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionizor } from '../reducers/actions';
import '../styles/App.css';
import Button from './Button';
import AnimatedNumber from './AnimatedNumber';
import AddModal from './AddModal';
import Family from './Family';
import Coupon from './Coupon';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFamilyMember: false
    };

    this.onSwitchAddFamilyMember = this.onSwitchAddFamilyMember.bind(this);
    this.onAddFamily = this.onAddFamily.bind(this);
    this.onRemoveFamily = this.onRemoveFamily.bind(this);
    this.onApplyCoupon = this.onApplyCoupon.bind(this);
    this.onRemoveCoupon = this.onRemoveCoupon.bind(this);
  }

  onSwitchAddFamilyMember() {
    this.setState({
      showAddFamilyMember: !this.state.showAddFamilyMember
    });
  }
  onAddFamily(name) {
    this.props.actions.ADD_FAMILY({name});
    this.onSwitchAddFamilyMember();
  }

  onRemoveFamily(name) {
    this.props.actions.REMOVE_FAMILY({name});
  }

  onApplyCoupon(coupon) {
    this.props.actions.APPLY_COUPON({coupon});
  }

  onRemoveCoupon() {
    this.props.actions.REMOVE_COUPON();
  }

  render() {
    const { memberPrice, totalCost, family, familyPrice, coupon, promos } = this.props;
    const { showAddFamilyMember } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">CLEAR Membership Estimate</h1>
        </header>
        { showAddFamilyMember &&
          <AddModal
            family={family}
            onAdd={this.onAddFamily}
            onClose={this.onSwitchAddFamilyMember}
          />
        }
        <section>
          { family.length < 3 &&
            <Button label="Add a Family Member" onClick={this.onSwitchAddFamilyMember} />
          }
        </section>
        <section>
          <div className="container">
            <label>Annual Membership</label>
            <AnimatedNumber value={memberPrice} />
          </div>
          <Family 
            data={family} 
            familyPrice={<AnimatedNumber value={familyPrice} />}
            removeFamily={this.onRemoveFamily}
          />
          <hr />
          <div className="container">
            <label>Total</label>
            <AnimatedNumber value={totalCost} />
          </div>
        </section>
        <section>
          <Coupon
            onAdd={this.onApplyCoupon}
            onRemove={this.onRemoveCoupon}
            appliedCoupon={coupon}
            promos={promos}
          />
        </section>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const { family, memberPrice, familyPrice } = state;
  return {
    ...state,
    totalCost: memberPrice + (familyPrice * family.length)
  };
}

export function mapDispatchToProps(dispatch) {
  return { actions: actionizor(dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  memberPrice: PropTypes.number, 
  totalCost: PropTypes.number, 
  family: PropTypes.array, 
  familyPrice: PropTypes.number, 
  coupon: PropTypes.string, 
  promos: PropTypes.object,
  actions: PropTypes.object
};
