import missingPeopleAPI from "../../API/API";
import * as types from "./actionTypes";
import Swal from "sweetalert2";

export const createMissingPerson = (details) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await missingPeopleAPI("/admin/create-missing-person", {
      method: "POST",
      data: details,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Missing Person is created!",
      confirmButtonColor: "#212529",
    });

    return dispatch({
      type: types.CREATE_MISSING_PERSON,
      payload: data.missingPerson,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_MISSING_PERSON,
    });
    console.log(error.response.data.message);
    return Swal.fire({
      icon: "error",
      title: "Missing Person is not created",
      confirmButtonColor: "#212529",
      text: `${error.response.data.message}`,
    });
  }
};

export const getAllMissingPeople = () => async (dispatch) => {
  try {
    const { data } = await missingPeopleAPI("/missing-people", {
      method: "GET",
      withCredentials: true,
    });

    dispatch({
      type: types.GET_MISSING_PEOPLE,
      payload: data.missingPeople,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_MISSING_PERSON,
    });
  }
};

export const removeMissingPerson = (id, password) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    await missingPeopleAPI(`admin/remove-missing-person/${id}`, {
      method: "POST",
      data: { password },
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
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

    dispatch({
      type: types.REMOVE_MISSING_PERSON,
      payload: { missingID: id },
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password is not correct",
    });
    // dispatch({
    //   type: types.ERROR_MISSING_PERSON,
    // });
  }
};
