import React from 'react'
import styles from "./ShiftLink.module.scss"
import { Link, useMatch } from 'react-router-dom'

export const ShiftLink = (props) => {

    const { to, textLink, icon, ...rest } = props

    const match = useMatch(to)

    return (
        <Link
            to={to}
            className={match ? styles.activeShiftLink : styles.shiftLink}
            {...rest}
        >
            <div className={styles.innerLink}>
                <div className={styles.icon}>{icon}</div>
                {textLink}
            </div>
        </Link>
    )
}
