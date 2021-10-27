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
  GET_BOOKED_BY_ID_SUCCESS,
  GET_BOOKED_BY_ID_FAIL,
  GET_HISTORY_BY_ID_SUCCESS,
  GET_HISTORY_BY_ID_FAIL,
  
} from "../constants/bookingconst";

import axios from "axios";

export const bookEvent = (id,book, history) => async (dispatch) => {
  dispatch({ type: LOADING_EVENT });
  try {
    const auth = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.post(`/booking/${id}`, book, auth);
    dispatch({ type: ADD_SUCCESS, payload: response.data });
    history.push("/");
  } catch (error) {
    console.dir(error);
    dispatch({ type: ADD_FAIL, payload: error });
  }
};

export const getHistory = () => async (dispatch) => {
  dispatch({ type: LOADING_EVENT });
  try {
    const auth = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.get(`/booking/history`, auth);
    dispatch({ type: GET_HISTORY_SUCCESS, payload: response.data });
  } catch (error) {
    console.dir(error);
    dispatch({ type: GET_HISTORY_FAIL, payload: error });
  }
};

export const getBooked = () => async (dispatch) => {
  dispatch({ type: LOADING_EVENT });
  try {
    const auth = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.get(`/booking/bookingslist`, auth);
    dispatch({ type: GET_BOOKED_SUCCESS, payload: response.data });
  } catch (error) {
    console.dir(error);
    dispatch({ type: GET_BOOKED_FAIL, payload: error });
  }
};

export const getBookedById =
  (bookId ) =>
  async (dispatch) => {
    dispatch({ type: LOADING_EVENT });
      console.log("action",bookId);
    try {
      const auth = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      console.log("action", bookId);
      
      const response = await axios.get(`/booking/bookinglist/${bookId}`, auth);
      dispatch({ type: GET_BOOKED_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
      console.dir(error);
      console.log("action", bookId);
      
      dispatch({ type: GET_BOOKED_BY_ID_FAIL, payload: error });
    }
  };

export const getHistoryById = ({id}) => async (dispatch) => {
  dispatch({ type: LOADING_EVENT });
  try {
    const auth = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.get(`/booking/history/${id}`, auth);
    dispatch({ type: GET_HISTORY_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    console.dir(error);
    dispatch({ type: GET_HISTORY_BY_ID_FAIL, payload: error });
  }
};


