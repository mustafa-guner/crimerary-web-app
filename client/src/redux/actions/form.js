import contactAPI from "../../API/API";
import * as types from "./actionTypes";
import Swal from "sweetalert2";

export const createExistedMissingPersonReport =
  (details) => async (dispatch) => {
    try {
      console.log(details.get("missingPerson"));
      const { data } = await contactAPI(
        "/contact/report-existed-missing-person",
        {
          method: "POST",
          withCredentials: true,
          data: details,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
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
      console.log(error.response.data);
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
