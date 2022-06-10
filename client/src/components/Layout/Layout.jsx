import React, { useState } from 'react'
import styles from "./Layout.module.scss"
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header.jsx'
import { Navigation } from "../Navigation/Navigation.jsx"
import { IoEnterOutline } from "react-icons/io5"
import { ImExit } from "react-icons/im"

export const Layout = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <>
            <div className={styles.container}>
                <Header />
            </div>

            <div className={styles.container}>
                <div className={isOpenMenu ? (styles.contentBlock && styles.active) : styles.contentBlock}>
                    <div className={styles.isMenuOpen}>
                        <div onClick={() => setIsOpenMenu(prev => !prev)} className={styles.isMenuOpen__btn}>
                            {isOpenMenu ? <IoEnterOutline style={{ transform: "rotate(180deg)" }} size='20' /> : <ImExit size='20' />}
                        </div>
                        <div className={styles.navigationMain}>
                            <Navigation />
                        </div>
                    </div>
                    <div className={styles.contentMain}>
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}
