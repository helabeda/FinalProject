import {
  LOADING_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  
} from "../constants/userconst";
import axios from "axios";

export const getUserId = (id) => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  try {
    const response = await axios.get(`/user/${id}`,id);
    dispatch({ type: GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.dir(error);
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};
