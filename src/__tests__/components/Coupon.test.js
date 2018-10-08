import React from 'react';
import enzyme from '../../test-helper.js';
import Coupon from '../../components/Coupon';

const { mount } = enzyme;

describe('Coupon', () => {
  const fn = jest.fn();
  const PROMO = 'PROMO';
  const wrapper = mount(<Coupon 
    appliedCoupon=''
    promos={{
      [PROMO]: {}
    }}
    onAdd={fn}
    onRemove={fn}
  />);

  it('shows an invalid state', () => {
    expect(wrapper.find('.Coupon-invalid').length).toEqual(2);
  });

  it('changes input values', () => {
    wrapper.instance().onChange({target: { value: PROMO }});
    expect(wrapper.state().coupon).toBe(PROMO);
  });
  
  it('applies a coupon', () => {
    wrapper.setProps({ coupon: 'PROMO', appliedCoupon: 'PROMO' });
    wrapper.instance().applyCoupon();
    expect(fn.mock.calls.length).toEqual(1);
  });

  it('shows valid state', () => {
    wrapper.setProps({ coupon: 'PROMO', appliedCoupon: 'PROMO' });
    expect(wrapper.find('.Coupon-invalid').length).toEqual(0);
  });

  it('removes a coupon', () => {
    wrapper.instance().removeCoupon();
    expect(fn.mock.calls.length).toEqual(2);
  });
});
