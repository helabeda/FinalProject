import {
  LOADING_EVENT,
  ADD_SUCCESS,
  ADD_FAIL,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAIL,
  GET_BOOKED_SUCCESS,
  GET_BOOKED_FAIL,
  DELETE_SUCCESS,
  DELETE_FAIL,
  GET_HISTORY_BY_ID_SUCCESS,
  GET_HISTORY_BY_ID_FAIL,
  GET_BOOKED_BY_ID_SUCCESS,
  GET_BOOKED_BY_ID_FAIL,
} from "../constants/bookingconst";


const initialState = {
  loading: false,
  errors: null,
  book: {},
  history: [],
  booked: [],
  historyid: {},
  bookedid:{},
};

export const bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_EVENT:
      return { ...state, loading: true };
    case ADD_SUCCESS:
      return { ...state, loading: false, errors: null };
    case ADD_FAIL:
      return { ...state, errors: payload, loading: false };
    case GET_HISTORY_SUCCESS:
      return { ...state, loading: false, history: payload, errors: null };
    case GET_HISTORY_FAIL:
      return { ...state, errors: payload, loading: false };
    case GET_BOOKED_SUCCESS:
      return { ...state, loading: false, booked: payload, errors: null };
    case GET_BOOKED_FAIL:
      return { ...state, loading: false, errors: payload };
    case GET_HISTORY_BY_ID_SUCCESS:
      return { ...state, loading: false, historyid: payload, errors: null };
    case GET_HISTORY_BY_ID_FAIL:
      return { ...state, errors: payload, loading: false };
    case GET_BOOKED_BY_ID_SUCCESS:
      return { ...state, loading: false, bookedid: payload, errors: null };
    case GET_BOOKED_BY_ID_FAIL:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};