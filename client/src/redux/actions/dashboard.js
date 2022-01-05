import authAPI from "../../API/API";
import * as types from "./actionTypes";

export const dashboard = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await authAPI("/auth/me/", {
      method: "GET",
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return dispatch({
      type: types.GET_DASHBOARD,
      payload: data.token,
    });
  } catch (error) {
    return dispatch({
      type: types.AUTH_ERROR,
    });
  }
};

export const clearDashboard = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_DASHBOARD,
  });
};
