import crimeAPI from "../../API/API";
import * as types from "./actionTypes";
import Swal from "sweetalert2";

export const createCriminal = (details) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await crimeAPI("/admin/add-new-criminal", {
      method: "POST",
      withCredentials: true,
      data: details,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    dispatch({
      type: types.CREATE_CRIMINAL,
      payload: data.criminal,
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Criminal is created!",
      confirmButtonColor: "#212529",
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_CRIMINAL,
    });
  }
};

export const getCriminal = (id) => async (dispatch) => {
  try {
    const { data } = await crimeAPI(`/criminals/${id}`, {
      method: "GET",
      withCredentials: true,
    });

    return dispatch({
      type: types.GET_CRIMINAL,
      payload: data.criminal,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_CRIMINAL,
    });
  }
};

export const editCriminal = (id, updates) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await crimeAPI(`/admin/edit-criminal/${id}`, {
      method: "PUT",
      data: updates,
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: types.EDIT_CRIMINAL,
      payload: data.criminal,
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Criminal is edited!",
      confirmButtonColor: "#212529",
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_CRIMINAL,
    });
  }
};

export const removeCriminal = (id, password) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    await crimeAPI(`/admin/remove-criminal/${id}`, {
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
      type: types.REMOVE_CRIMINAL,
      payload: { criminalID: id },
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password is not correct",
    });
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
    dispatch({
      type: types.ERROR_CRIMINAL,
    });
  }
};
