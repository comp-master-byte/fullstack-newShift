import React from "react"
import ReactDom from "react-dom/client"
import { App } from "./App.jsx"

if(module.hot) module.hot.accept()

const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(
    <App />
)