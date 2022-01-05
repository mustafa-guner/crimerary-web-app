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
        "Content-Type": "application/x-www-form-urlencoded",
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
    dispatch({
      type: types.ERROR_CRIME,
    });

    return Swal.fire({
      icon: "error",
      title: "Crime is not created",
      confirmButtonColor: "#212529",
      text: `${error.response.data.message}`,
    });
  }
};

export const getCrimeByID = (id) => async (dispatch) => {
  try {
    const { data } = await crimeAPI(`/crimes/${id}`, {
      method: "GET",
      withCredentials: true,
    });

    return dispatch({
      type: types.GET_CRIME,
      payload: data.crime,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_CRIME,
    });
  }
};

export const getSimilarCategories = (category) => async (dispatch) => {
  try {
    const { data } = await crimeAPI(`/crimes?category=${category}`, {
      method: "GET",
      withCredentials: true,
    });

    dispatch({
      type: types.SIMILAR_CRIMES,
      payload: data.crimes,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editCrime = (id, newDetails) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await crimeAPI(`/admin/edit-crime/${id}`, {
      method: "PUT",
      data: newDetails,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    dispatch({
      type: types.EDIT_CRIME,
      payload: data.crime,
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Crime is edited!",
      confirmButtonColor: "#212529",
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getCrimes = () => async (dispatch) => {
  try {
    const { data } = await crimeAPI(`/crimes/`, {
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

export const getCrimesByCategory = (category) => async (dispatch) => {
  try {
    const { data } = await crimeAPI(`/crimes?category=${category}`, {
      method: "GET",
      withCredentials: true,
    });

    return dispatch({
      type: types.GET_CRIMES,
      payload: data.crimes,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCrimesBySearch = (search) => async (dispatch) => {
  try {
    const { data } = await crimeAPI(`/crimes?k=${search}`, {
      method: "GET",
      withCredentials: true,
    });

    return dispatch({
      type: types.GET_CRIMES,
      payload: data.crimes,
    });
  } catch (error) {
    console.log(error);
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
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password is not correct",
    });
  }
};
