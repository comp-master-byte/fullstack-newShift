import React from 'react'
import styles from "./Header.module.scss";
import { ImTrello } from "react-icons/im"

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerRow}>
                <div className={styles.headerRow__logo}>
                    <ImTrello size="20" />
                </div>
                <div className={styles.headerRow__title}>
                    Task Desk
                </div>
            </div>
        </div>
    )
}
