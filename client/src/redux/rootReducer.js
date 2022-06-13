import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"
import thunk from "redux-thunk";
import { addTaskReducer } from "./reducers/addTaskReducer";
import {alertReducer} from "./reducers/alertReducer";

const rootReducer = combineReducers({
    tasks: addTaskReducer,
    isShowAlert: alertReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))