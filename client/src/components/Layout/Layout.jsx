import React, { useState } from 'react'
import styles from "./Layout.module.scss"
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header.jsx'
import { Navigation } from "../Navigation/Navigation.jsx"
import { IoEnterOutline } from "react-icons/io5"
import { ImExit } from "react-icons/im"

export const Layout = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const openMenubarHandler = () => setIsOpenMenu(prev => !prev)

    return (
        <>
            <div className={styles.container}>
                <Header />
            </div>

            <div className={styles.container}>
                <div className={styles.layout}>
                    <Navigation />
                    <div className={styles.contentMain}>
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}
