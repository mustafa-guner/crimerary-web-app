import crimeAPI from "../../API/API";
import * as types from "./actionTypes";
import Swal from "sweetalert2";

export const createCrime = (details) => async (dispatch) => {
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

export const editCrime = (newDetails) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await crimeAPI("/crimes/", {
      method: "PUT",
      data: { newDetails },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return dispatch({
      type: types.EDIT_CRIME,
      payload: data.crimes,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getCrimes = () => async (dispatch) => {
  try {
    const { data } = await crimeAPI("/crimes/", {
      method: "GET",
      withCredentials: true,
    });

    return dispatch({
      type: types.GET_CRIMES,
      payload: data.crimes,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const removeCrime = (id, password) => async (dispatch) => {
  const token = window.localStorage.getItem("token");
  try {
    await crimeAPI(`/admin/remove-crime/${id}`, {
      method: "POST",
      data: { password },
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire(
      "Deleted!",
      "Your file has been deleted.",
      "success"
    );

    return dispatch({
      type: types.REMOVE_CRIME,
      payload: { crimeID: id },
    });
  } catch (error) {
    console.log(error.response.data);

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password is not correct",
    });
  }
};
