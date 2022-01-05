import crimeAPI from "../../API/API";
import * as types from "./actionTypes";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await crimeAPI("/categories/", {
      method: "GET",
      withCredentials: true,
    });

    dispatch({
      type: types.GET_CATEGORIES,
      payload: data.categories,
    });
  } catch (error) {
    console.log(error);
  }
};
