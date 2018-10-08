import React from 'react';
import enzyme from '../../test-helper.js';
import Family from '../../components/Family';
import FamilyRow from '../../components/FamilyRow';

const { mount } = enzyme;

describe('Family', () => {
  const fn = jest.fn();

  it('shows an empty state', () => {
    const wrapper = mount(<Family 
      data={[]}
      removeFamily={fn}
    />);

    expect(wrapper.find('p').text()).toEqual('No family members added');
  });

  it('renders family rows', () => {
    const wrapper = mount(<Family 
      data={['Tony', 'Tina']}
      removeFamily={fn}
    />);

    expect(wrapper.find(FamilyRow).length).toEqual(2);
  });
});
