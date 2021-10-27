import { combineReducers } from "redux";
import { userReducer } from "./authReducer";
import { eventReducer } from "./eventReducer";
import {bookingReducer} from "./bookingReducer"
import { useroptReducer } from "./userReducer";

export const rootReducer = combineReducers({ userReducer, eventReducer,bookingReducer,useroptReducer });
