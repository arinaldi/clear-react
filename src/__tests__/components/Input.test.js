import React from 'react';
import enzyme from '../../test-helper.js';
import Input from '../../components/Input';

const { shallow } = enzyme;

describe('Input', () => {
  it('passes className to input', () => {
    const wrapper = shallow(<Input className="tony" />);
    expect(wrapper.find('.tony').length).toBe(1);
  });

  it('passes defaults to empty className in input', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').props().className).toBe('Input ');
  });
});
