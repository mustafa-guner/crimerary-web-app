import * as types from "../actions/actionTypes";

const initialState = {
  criminals: [],
  criminal: null,
  loading: true,
};

const criminal = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.CREATE_CRIMINAL:
      return {
        ...state,
        crimes: [...state.crimes, payload],
        loading: false,
      };

    case types.GET_CRIMINALS:
      return {
        ...state,
        criminals: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default criminal;
