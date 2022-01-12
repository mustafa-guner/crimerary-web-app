import axios from "axios";

export default axios.create({
  baseURL: "https://crimerary.herokuapp.com/api/v1/",
});
