import crimeAPI from "../../API/API";
import * as types from "./actionTypes";
import Swal from "sweetalert2";

export const createCriminal = (details) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await crimeAPI("/admin/create-new-crime", {
      method: "POST",
      withCredentials: true,
      data: details,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: types.CREATE_CRIME,
      payload: data.crime,
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Crime is created!",
      confirmButtonColor: "#212529",
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getCriminals = () => async (dispatch) => {
  try {
    const { data } = await crimeAPI("/criminals/", {
      method: "GET",
      withCredentials: true,
    });

    return dispatch({
      type: types.GET_CRIMINALS,
      payload: data.criminals,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
