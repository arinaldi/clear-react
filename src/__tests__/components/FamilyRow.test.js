import React from 'react';
import enzyme from '../../test-helper.js';
import FamilyRow from '../../components/FamilyRow';

const { mount } = enzyme;

describe('FamilyRow', () => {
  const fn = jest.fn();
  const name = 'Tony';
  const wrapper = mount(<FamilyRow
    name={name}
    price={<span>50</span>}
    onRemove={fn}
  />);

  it('shows the name', () => {
    expect(wrapper.find('span').at(1).text()).toEqual(name);
  });

  it('shows the remove icon', () => {
    expect(wrapper.find('.remove').length).toEqual(1);
  });

  it('removes a family member', () => {
    wrapper.find('span').at(0).props().onClick();
    expect(fn.mock.calls.length).toEqual(1);
  });
});
