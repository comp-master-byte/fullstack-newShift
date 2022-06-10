import React from 'react'
import styles from "./Navigation.module.scss"
import { ShiftLink } from '../../UI/ShiftLink/ShiftLink.jsx'

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__title}>Меню</div>
            <ul className={styles.navigationList}>
                <ShiftLink to="/" textLink={'Главная'} />
                <ShiftLink to="/create" textLink={'Создать задачу'} />
                <ShiftLink to="/settings" textLink={'Настройки'} />
                <ShiftLink to="#" textLink={'Выход'} />
            </ul>
        </div>
    )
}
