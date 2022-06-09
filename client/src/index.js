import React from "react"
import ReactDom from "react-dom/client"
import { App } from "./App.jsx"
import { Provider }  from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./redux/rootReducer.js"


const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)