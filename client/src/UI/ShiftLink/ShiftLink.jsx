import React from 'react'
import styles from "./ShiftLink.module.scss"
import { Link, useMatch } from 'react-router-dom'

export const ShiftLink = (props) => {

    const { to, textLink, icon } = props

    const match = useMatch(to)

    return (
        <Link
            to={to}
            className={match ? styles.activeShiftLink : styles.shiftLink}
        >
            <img src={icon} alt="" />
            {textLink}
        </Link>
    )
}