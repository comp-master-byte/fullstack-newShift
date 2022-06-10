import React from 'react'
import styles from "./Navigation.module.scss"
import { ShiftLink } from '../../UI/ShiftLink/ShiftLink.jsx'
import { AiFillHome } from "react-icons/ai"
import { IoCreateOutline } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"

export const Navigation = () => {
    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.navigation__title}>Меню</div>
                <ul className={styles.navigationList}>
                    <ShiftLink to="/" textLink={'Главная'} icon={<AiFillHome />} />
                    <ShiftLink to="/create" textLink={'Создать задачу'} icon={<IoCreateOutline />} />
                    <ShiftLink to="/settings" textLink={'Настройки'} icon={<FiSettings />} />
                    <ShiftLink to="#" textLink={'Выход'} icon={<BiLogOut />} />
                </ul>
            </div>
        </>
    )
}
