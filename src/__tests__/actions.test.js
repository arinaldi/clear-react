import ACTIONS, { actionizor } from '../reducers/actions';

describe('actions', () => {
  const fn = jest.fn();
  const actions = actionizor(fn);
  const name = 'Tony';
  
  it('generates action methods', () => {
    expect(Object.keys(ACTIONS).length).toBe(Object.keys(actions).length);	 
  });

  it('triggers the dispatcher', () => {
    actions.ADD_FAMILY({ name });
    expect(fn.mock.calls.length).toBe(1);
  });
});
