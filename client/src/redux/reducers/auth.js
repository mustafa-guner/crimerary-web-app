import * as types from "../actions/actionTypes";

const initialState = {
  user: null,
  isAuth: false,
  token: localStorage.getItem("token"),
  loading: true,
  isRestricted: false, //after many wrong credentials
};

const auth = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        isAuth: true,
        ...payload,
        loading: false,
      };

    case types.UNABLE_LOADING:
      return {
        ...state,
        loading: false,
      };

    case types.IS_RESTRICTED:
      return { ...state, isRestricted: true };

    case types.LOGOUT:
    case types.LOGIN_ERROR:
    case types.AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuth: false,
        loading: false,
      };

    case types.LOAD_USER:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload,
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
