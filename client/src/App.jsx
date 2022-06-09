import React from 'react'
import "./styles/main.scss"
import { Routes, Route } from 'react-router-dom'
import { TaskPage } from './Pages/TaskPage.jsx'

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<TaskPage />} />
            </Routes>
        </div>
    )
}
