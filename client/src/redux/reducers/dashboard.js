import * as types from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  dashboard: null,
};

const auth = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_DASHBOARD:
      return {
        ...state,
        loading: false,
        isAuth: true,
        dashboard: payload,
      };

    case types.CLEAR_DASHBOARD:
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default auth;
