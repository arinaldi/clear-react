const actions = {
  ADD_FAMILY: 'ADD_FAMILY',
  REMOVE_FAMILY: 'REMOVE_FAMILY',
  APPLY_COUPON: 'APPLY_COUPON',
  REMOVE_COUPON: 'REMOVE_COUPON'
};

export default actions;

export const actionizor = dispatch => {
  const actionsOut = {};
  for (const action in actions) {
    actionsOut[action] = props => {
      dispatch({
        type: action,
        ...props
      });
    };
  }
  return actionsOut;
};
