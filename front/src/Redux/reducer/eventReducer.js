import{
    LOADING_EVENT, ADD_SUCCESS, ADD_FAIL,EDIT_SUCCESS,EDIT_FAIL, GET_FAIL, GET_SUCCESS,GET_ALL_SUCCESS,GET_ALL_FAIL
}from"../constants/eventconst"

const initialState = {
  loading: false,
  errors: null,
  event: {},
  events:[],
};

export const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_EVENT:
      return { ...state, loading: true };
    case ADD_SUCCESS:
      return { ...state, loading: false, errors: null };
    case ADD_FAIL:
      return { ...state, errors: payload, loading: false };
    case EDIT_SUCCESS:
      return { ...state, loading: false, errors: null };
    case EDIT_FAIL:
      return { ...state, errors: payload, loading: false };
    case GET_SUCCESS:
      return { ...state, loading: false, event: payload, errors: null };
    case GET_FAIL:
      return { ...state, loading: false, errors: payload };
    case GET_ALL_SUCCESS:
      return { ...state, loading: false, events: payload, errors: null };
    case GET_ALL_FAIL:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};