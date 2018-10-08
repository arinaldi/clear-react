import React from 'react';
import enzyme from '../../test-helper.js';
import AddModal from '../../components/AddModal';
import Button from '../../components/Button';

const { mount } = enzyme;

describe('AddModal', () => {
  const fn = jest.fn();
  const name = 'Tony';
  const wrapper = mount(<AddModal 
    family={[]}
    onAdd={fn}
    onClose={fn}
  />);

  it('starts with an empty state', () => {
    expect(wrapper.state().firstName).toEqual('');
  });

  it('onChangeInput updates state', () => {
    wrapper.instance().handleChange({
      target: {
        value: name
      }
    });

    expect(wrapper.state().firstName).toEqual(name);
  });

  it('can trigger onAdd with click', () => {
    wrapper.find(Button).first().simulate('click');
    expect(fn.mock.calls.length).toBe(1);
  });

  it('can trigger onAdd with Enter key', () => {
    wrapper.instance().handleChange({
      target: {
        value: name
      }
    });

    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(fn.mock.calls.length).toBe(2);
  });

  it('does not trigger onAdd with other key', () => {
    wrapper.find('input').simulate('keypress', { key: 'Esc' });
    expect(fn.mock.calls.length).toBe(2);
  });
});
