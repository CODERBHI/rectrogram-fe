import {legacy_createStore as createStore} from "redux";
import { combinedReducer } from "./combinedReducer";

export const store = createStore(
    combinedReducer
)
