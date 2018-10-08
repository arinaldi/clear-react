import React from 'react';
import enzyme from '../../test-helper.js';
import AnimatedNumber from '../../components/AnimatedNumber';

const { mount } = enzyme;

describe('AnimatedNumber', () => {
  jest.useFakeTimers();
  const wrapper = mount(<AnimatedNumber 
    value={100}
  />);

  it('starts with first value sent', () => {
    expect(wrapper.state().value).toEqual(100);
  });

  it('grows prop in steps', () => {
    wrapper.setProps({ value: 200 });
    wrapper.instance().animateValue();
    expect(wrapper.state().value).toBe(110);
  });

  it('gets smaller prop in steps', () => {
    wrapper.setProps({ value: 10 });
    wrapper.instance().animateValue();
    expect(wrapper.state().value < 110).toBe(true);
  });

  it('triggers animation on change in props', () => {
    const intervalCalls = setTimeout.mock.calls.length;
    wrapper.instance().componentDidUpdate();
    expect(setTimeout).toHaveBeenCalledTimes(intervalCalls + 1);
  });

  it('will not trigger an animation call if nothing changed', () => {
    const intervalCalls = setTimeout.mock.calls.length;
    wrapper.setProps({ value:100 });
    wrapper.setState({ value:100 });
    wrapper.instance().componentDidUpdate();
    expect(setTimeout).toHaveBeenCalledTimes(intervalCalls);
  });

  it('is graceful when state and props are same', () => {
    wrapper.setProps({ value:100 });
    wrapper.setState({ value:100 });
    wrapper.instance().animateValue();
    expect(wrapper.state().value).toBe(100);
  });
});
