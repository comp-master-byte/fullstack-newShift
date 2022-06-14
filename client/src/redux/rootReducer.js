import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"
import thunk from "redux-thunk";
import { addTaskReducer } from "./reducers/addTaskReducer";
import {alertReducer} from "./reducers/alertReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    tasks: addTaskReducer,
    isShowAlert: alertReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);