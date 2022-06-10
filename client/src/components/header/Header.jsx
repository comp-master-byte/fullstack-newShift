import React from 'react'
import styles from "./Header.module.scss"

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerRow}>
                <div className={styles.headerRow__title}>
                    Kanban Desk
                </div>
            </div>
        </div>
    )
}
