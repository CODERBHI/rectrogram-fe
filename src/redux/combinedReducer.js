import {combineReducers} from "redux";
import { userReducer } from "./userReducer";

export const combinedReducer = combineReducers({userReducer:userReducer});