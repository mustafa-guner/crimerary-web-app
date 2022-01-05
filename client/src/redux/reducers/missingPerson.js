import * as types from "../actions/actionTypes";

const initialState = {
  missingPerson: null,
  missingPeople: [],
  loading: true,
};

const missingPerson = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.CREATE_MISSING_PERSON:
      return {
        ...state,
        loading: false,
        missingPerson: payload,
      };

    case types.GET_MISSING_PEOPLE:
      return {
        ...state,
        loading: false,
        missingPeople: payload,
      };

    case types.ERROR_MISSING_PERSON:
      return {
        ...state,
        loading: false,
        missingPerson: null,
        missingPeople: [],
      };

    case types.REMOVE_MISSING_PERSON:
      return {
        ...state,
        loading: false,
        missingPeople: state.missingPeople.filter(
          (missingPerson) => missingPerson._id !== payload.missingID
        ),
      };

    default:
      return state;
  }
};

export default missingPerson;
