import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"
import thunk from "redux-thunk";
import { addTaskReducer } from "./reducers/addTaskReducer";

const rootReducer = combineReducers({
    tasks: addTaskReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))