import {
  LOADING_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CURRENT_USER,
  CURRENT_FAIL,
  LOGOUT_USER,
} from "../constants/authconst";
import axios from "axios";

export const registerUser = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  try {
    const response = await axios.post("/user/signup", newUser);
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
    history.push("/login");
  } catch (error) {
    console.dir(error);
    dispatch({ type: SIGNUP_FAIL, payload: error });
  }
};

export const loginUser = (infoUser, history) => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  try {
    const response = await axios.post("/user/login", infoUser);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.get("/user/currentUser", opts);
    dispatch({ type: CURRENT_USER, payload: response.data.user });
  } catch (error) {
    console.dir(error);
    dispatch({ type: CURRENT_FAIL, payload: error });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};
