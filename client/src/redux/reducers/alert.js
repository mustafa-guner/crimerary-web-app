import * as types from "../actions/actionTypes";

const initialState = {
  id: 1,
  msg: "Please login",
  alertType: "danger",
};

const alert = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.SET_ALERT:
      return [...state, payload];

    default:
      return state;
  }
};

export default alert;
