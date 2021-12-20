import authAPI from "../../API/API";
import * as types from "./actionTypes";
import { clearDashboard } from "./dashboard";
import Swal from "sweetalert2";

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
      const errors = error.response.data.errors;

      if (errors) {
        return Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: `${errors.msg}`,
        });
      }

      return Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: `${error.response.data.message}`,
      });
    }
  };

export const logout = () => async (dispatch) => {
  Swal.fire({
    title: "Leaving ? 🥺",
    text: "Are you sure want to log out?",
    icon: "warning",
    showCancelButton: true,

    confirmButtonText: "Yes, log out!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Logged out!", "Logged out successfully.", "success");
      dispatch({
        type: types.LOGOUT,
      });
      dispatch({
        type: types.CLEAR_DASHBOARD,
      });

      dispatch(clearDashboard());
    }
  });
};
