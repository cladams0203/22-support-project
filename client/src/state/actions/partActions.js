import axios from "axios";
export const LOADING = "LOADING";
export const PART_SUCCESS = "PART_SUCCESS";
export const ERROR = "ERROR";

export const getParts = (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:5000/products")
    .then((res) => {
      dispatch({ type: PART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.message });
    });
};
