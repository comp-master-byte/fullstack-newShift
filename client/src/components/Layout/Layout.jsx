import React, { Fragment, useState } from 'react'
import styles from "./Layout.module.scss"
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header.jsx'
import { Navigation } from "../Navigation/Navigation.jsx";
import { ShiftBtn } from "../../UI/ShiftBtn/ShiftBtn.jsx"

export const Layout = () => {

    const [showNavigation, setShowNavigation] = useState(false)

    const toggleNavigation = () => setShowNavigation(prev => !prev)

    return (
        <Fragment>
            <div className={styles.container}>
                <Header showNavigation={showNavigation} toggle={toggleNavigation} />
            </div>

            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={showNavigation ? styles.showNavigation : styles.hideNavigation}>
                        <Navigation onClose={toggleNavigation} />
                    </div>
                    <div className={styles.firstContentMain}>
                        <Outlet />
                    </div>

                </div>
            </div>

        </Fragment>
    )
}
