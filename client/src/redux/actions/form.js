import contactAPI from "../../API/API";
import * as types from "./actionTypes";
import Swal from "sweetalert2";

export const createExistedMissingPersonReport =
  (details) => async (dispatch) => {
    try {
      const { data } = await contactAPI(
        "/contact/report-existed-missing-person",
        {
          method: "POST",
          withCredentials: true,
          data: details,
        }
      );

      dispatch({
        type: types.CREATE_CONTACT_FORM,
        payload: data.form,
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Form is submitted!",
        confirmButtonColor: "#212529",
      });
    } catch (error) {
      dispatch({
        type: types.ERROR_CONTACT_FORM,
      });

      return Swal.fire({
        icon: "error",
        title: "Form is not submitted",
        confirmButtonColor: "#212529",
        text: `${error.response.data.message}`,
      });
    }
  };

export const createNewMissingPersonReport = (details) => async (dispatch) => {
  try {
    const { data } = await contactAPI("/contact/report-new-missing-person", {
      method: "POST",
      withCredentials: true,
      data: details,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    dispatch({
      type: types.CREATE_CONTACT_FORM,
      payload: data.form,
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Form is submitted!",
      confirmButtonColor: "#212529",
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_CRIMINAL,
    });

    return Swal.fire({
      icon: "error",
      title: "Form is not submitted",
      confirmButtonColor: "#212529",
      text: `${error.response.data.message}`,
    });
  }
};

export const getForms = () => async (dispatch) => {
  try {
    const { data } = await contactAPI("/contact/forms", {
      method: "GET",
      withCredentials: true,
      headers: {},
    });

    return dispatch({
      type: types.GET_FORMS,
      payload: data.forms,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR_CRIMINAL,
    });
  }
};

export const rejectForm = (id) => async (dispatch) => {
  try {
    await contactAPI(`/contact/forms/${id}`, {
      withCredentials: true,
      method: "DELETE",
    });

    Swal.fire("Deleted!", "Form has been deleted.", "success");

    return dispatch({
      type: types.REMOVE_FORM,
      payload: id,
    });
  } catch (error) {
    return dispatch({
      type: types.ERROR_CRIMINAL,
    });
  }
};
