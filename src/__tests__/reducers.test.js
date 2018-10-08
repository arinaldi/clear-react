import reducers, { PRICES, initialState } from '../reducers/index';
import actions from '../reducers/actions';

describe('reducers index', () => {
  const name = 'Tony';

  it('calling reducers without anything returns default state', () => {
    const reduced = reducers(undefined, {type: '' });
    expect(reduced.memberPrice).toEqual(PRICES.MEMBER);	 
  });

  it('can add a family member', () => {
    const reduced = reducers(undefined, {
      type: actions.ADD_FAMILY,
      name
    });
    expect(reduced.family[0]).toEqual(name);
  });

  it('does not add same the same family member', () => {
    initialState.family.push(name);
    const reduced = reducers(initialState, {
      type: actions.ADD_FAMILY,
      name
    });
    expect(reduced.family.length).toEqual(1);
  });

  it('cannot apply an invalid coupon', () => {
    const reduced = reducers(initialState, {
      type: actions.APPLY_COUPON,
      coupon: 'EXPIRED'
    });
    expect(reduced.coupon).toEqual('');
  });

  it('can apply a valid coupon', () => {
    const reduced = reducers(undefined, {
      type: actions.APPLY_COUPON,
      coupon: 'NYSPECIAL'
    });
    expect(reduced.memberPrice).toEqual(50);
    expect(reduced.familyPrice).toEqual(5);
  });

  it('only removes a present family member', () => {
    const reduced = reducers(initialState, {
      type: actions.REMOVE_FAMILY,
      name: 'Tina'
    });
    expect(reduced.family.length).toEqual(1);
    expect(reduced.family[0]).toEqual(name);
  });

  it('can remove a family member', () => {
    const reduced = reducers(initialState, {
      type: actions.REMOVE_FAMILY,
      name
    });
    expect(reduced.family.length).toEqual(0);
  });

  it('can remove a coupon', () => {
    initialState.coupon = 'NYSPECIAL';
    const reduced = reducers(initialState, {
      type: actions.REMOVE_COUPON
    });
    expect(reduced.coupon).toEqual('');
    expect(reduced.memberPrice).toEqual(PRICES.MEMBER);
    expect(reduced.familyPrice).toEqual(PRICES.FAMILY);
  });

  it('cannot remove a coupon if not currently applied', () => {
    initialState.coupon = '';
    const reduced = reducers(initialState, {
      type: actions.REMOVE_COUPON
    });
    expect(reduced.coupon).toEqual('');
  });
});
