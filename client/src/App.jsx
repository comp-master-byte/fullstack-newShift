import React from 'react'
import "./styles/main.scss"
import { Routes, Route } from 'react-router-dom'
import { TaskPage } from './Pages/TaskPage/TaskPage.jsx'
import { TasksPage } from "./Pages/TasksPage/TasksPage.jsx"
import { Layout } from './components/Layout/Layout.jsx'
import { CreateTaskPage } from './Pages/CreateTaskPage/CreateTaskPage.jsx'
import { SettingsPage } from './Pages/Settings/SettingsPage.jsx';
import { EditPage } from './EditPage/EditPage.jsx';

export const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TasksPage />} />
                    <Route path="create" element={<CreateTaskPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="edit/:id" element={<EditPage />} />
                </Route>
            </Routes>
        </div>
    )
}
