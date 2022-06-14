import React from "react"
import ReactDom from "react-dom/client"
import { App } from "./App.jsx"
import { Provider }  from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom"
import { persistor, store } from "./redux/rootReducer.js"
import { DndProvider } from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend";

const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <DndProvider backend={HTML5Backend}>
                    <App />
                </DndProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
)