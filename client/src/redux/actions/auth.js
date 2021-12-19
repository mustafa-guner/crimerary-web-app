import authAPI from "../../API/API";
import * as types from "./actionTypes";
import { clearDashboard } from "./dashboard";

export const loadUser = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await authAPI("/auth/testAuth/", {
      method: "GET",
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return dispatch({
      type: types.LOAD_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: types.AUTH_ERROR,
    });
  }
};

export const unable_loading = () => (disptach) => {
  return disptach({
    type: types.UNABLE_LOADING,
  });
};

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const { data } = await authAPI("/auth/login", {
        method: "POST",
        data: { username, password },
        withCredentials: true,
      });

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: data,
      });

      dispatch(loadUser());
    } catch (error) {
      console.log(error);
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  });
  dispatch({
    type: types.CLEAR_DASHBOARD,
  });

  dispatch(clearDashboard());
};
