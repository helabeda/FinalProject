import {
  LOADING_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constants/userconst";

const initialState = {
  loading: false,
  errors: null,
  user: {},
};

export const useroptReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: payload, errors: null };
    case GET_USER_FAIL:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};
