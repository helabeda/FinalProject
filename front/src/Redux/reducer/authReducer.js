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

const initialState = {
  loading: false,
  errors: null,
  user: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_USER:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, loading: false, user: payload.user, errors: null };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, errors: null };
    case LOGIN_FAIL:
      return { ...state, errors: payload, loading: false };
    case SIGNUP_FAIL:
      return { ...state, errors: payload, loading: false };
    case CURRENT_USER:
      return { ...state, user: payload, loading: false, errors: null };
    case CURRENT_FAIL:
      return { ...state, errors: payload, loading: false };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { user: {}, errors: null, loading: false };
    default:
      return state;
  }
};
