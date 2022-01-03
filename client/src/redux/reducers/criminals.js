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
        criminal: payload,
        loading: false,
      };

    case types.GET_CRIMINALS:
      return {
        ...state,
        criminals: payload,
        loading: false,
      };

    case types.GET_CRIMINAL:
    case types.EDIT_CRIMINAL:
      return {
        ...state,
        criminal: payload,
        loading: false,
      };

    case types.ERROR_CRIMINAL:
      return {
        ...state,
        criminal: null,
        criminals: [],
        loading: false,
      };

    case types.REMOVE_CRIMINAL:
      return {
        ...state,
        criminals: state.criminals.filter(
          (criminal) => criminal._id !== payload.criminalID
        ),
        loading: false,
      };

    default:
      return state;
  }
};

export default criminal;
