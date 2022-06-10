import React from 'react'
import styles from "./Layout.module.scss"
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header.jsx'
import { Navigation } from "../Navigation/Navigation.jsx"

export const Layout = () => {
    return (
        <>
            <div className={styles.container}>
                <Header />
            </div>

            <div className={styles.container}>
                <div className={styles.contentBlock}>
                    <div className={styles.navigationMain}>
                        <Navigation />
                    </div>
                    <div className={styles.contentMain}>
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}
