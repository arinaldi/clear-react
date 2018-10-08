import ACTIONS from './actions';

export const PRICES = {
  MEMBER: 179,
  FAMILY: 50
};

export const initialState = {
  memberPrice: PRICES.MEMBER,
  familyPrice: PRICES.FAMILY,
  family: [],
  promos: {
    HALFPRICE: {
      memberPrice: 90,
      familyPrice: 25
    },
    FIVEOFF: {
      memberPrice: 174,
      familyPrice: 45
    },
    NYSPECIAL: {
      memberPrice: 50,
      familyPrice: 5
    }
  },
  coupon: ''
};

const reducers = {
  [ACTIONS.ADD_FAMILY]: (state, { name }) => {
    if (state.family.length === 3 || state.family.includes(name)) {
      return state;
    }

    return {
      ...state,
      family: [...state.family, name]
    };
  },
  [ACTIONS.REMOVE_FAMILY]: (state, { name }) => {
    if (!state.family.includes(name)) {
      return state;
    }

    const index = state.family.indexOf(name);
    return {
      ...state,
      family: [
        ...state.family.slice(0, index),
        ...state.family.slice(index + 1)
      ]
    };
  },
  [ACTIONS.APPLY_COUPON]: (state, { coupon }) => {
    if (!Object.keys(state.promos).includes(coupon)) {
      return state;
    }

    const { memberPrice, familyPrice } = state.promos[coupon];
    return {
      ...state,
      memberPrice,
      familyPrice,
      coupon
    };
  },
  [ACTIONS.REMOVE_COUPON]: state => {
    if (!state.coupon) {
      return state;
    }

    return {
      ...state,
      memberPrice: PRICES.MEMBER,
      familyPrice: PRICES.FAMILY,
      coupon: ''
    };
  }
};

export default (state = initialState, {type, ...packet}) => {
  const reducer = reducers[type];
  return reducer ? reducer(state, packet) : state;
};
