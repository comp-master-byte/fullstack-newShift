import React from 'react'
import "./styles/main.scss"
import { Routes, Route } from 'react-router-dom'
import { TaskPage } from './Pages/TaskPage/TaskPage.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { CreateTaskPage } from './Pages/CreateTaskPage/CreateTaskPage.jsx'
import { SettingsPage } from './Pages/Settings/SettingsPage.jsx'

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TaskPage />} />
                    <Route path="create" element={<CreateTaskPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </div>
    )
}
