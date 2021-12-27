import * as types from "../actions/actionTypes";

const initialState = {
  category: null,
  categories: [],
  loading: true,
};

const category = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_CATEGORIES:
      return {
        ...state,

        categories: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default category;
