import * as types from "../actions/actionTypes";

const initialState = {
  forms: [],
  form: null,
  loading: true,
};

const form = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.CREATE_CONTACT_FORM:
      return {
        ...state,
        form: payload,
        loading: false,
      };

    case types.ERROR_CONTACT_FORM:
      return {
        ...state,
        form: null,
        forms: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default form;
