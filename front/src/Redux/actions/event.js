
import {
  LOADING_EVENT,
  ADD_SUCCESS,
  ADD_FAIL,
  EDIT_SUCCESS,
  EDIT_FAIL,
  GET_FAIL,
  GET_SUCCESS,
  GET_ALL_SUCCESS,
  GET_ALL_FAIL,
} from "../constants/eventconst";

import axios from "axios";


export const addEvent = (newEvent, history) => async (dispatch) => {
  dispatch({ type: LOADING_EVENT });
  try {
    const auth = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.post("/event/createEvent", newEvent,auth);
    dispatch({ type: ADD_SUCCESS, payload: response.data });
    history.push("/");
  } catch (error) {
    console.dir(error);
    dispatch({ type: ADD_FAIL, payload: error });
  }
};

export const editEvent= (id,event, history) => async (dispatch) => {
  dispatch({ type: LOADING_EVENT });
  try {
    const auth = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.put(`/event/${id}`,event,auth);
    dispatch({type:EDIT_SUCCESS,payload:response.data})
        history.push(`/events/${id}`);
  } catch (error) {
    console.dir(error)
    dispatch({type:EDIT_FAIL,payload:error})
  }
        
}

export const getEventId=(id)=>async(dispatch)=>{
dispatch({ type: LOADING_EVENT });
  try{
      const response = await axios.get(`/event/${id}`,id);
    dispatch({type:GET_SUCCESS,payload:response.data})
  } catch (error) {
    console.dir(error)
    dispatch({type:GET_FAIL,payload:error})
  }
        
}

export const getAllEvent = () => async (dispatch) => {
  dispatch({ type: LOADING_EVENT });
  try {
    const response = await axios.get(`/event`, );
    dispatch({ type: GET_ALL_SUCCESS, payload: response.data });
  } catch (error) {
    console.dir(error);
    dispatch({ type: GET_ALL_FAIL, payload: error });
  }
};

