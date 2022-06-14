import React, { Fragment, useState } from "react";
import styles from "./Navigation.module.scss";
import { ShiftLink } from "../../UI/ShiftLink/ShiftLink.jsx";
import { AiFillHome } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { IoMdClose } from "react-icons/io"

export const Navigation = (props) => {

    const { onClose } = props;

    return (
        <Fragment>
            <div className={styles.navigation}>
                <div onClick={onClose} className={styles.navigationToggle}>
                    <IoMdClose size="30" />
                </div>
                <div className={styles.navigation__title}>Меню</div>
                <ul className={styles.navigationList}>
                    <ShiftLink to="/" textLink={'Главная'} icon={<AiFillHome />} />
                    <ShiftLink to="/create" textLink={'Создать задачу'} icon={<IoCreateOutline />} />
                    <ShiftLink to="/settings" textLink={'Настройки'} icon={<FiSettings />} />
                    <ShiftLink to="#" textLink={'Выход'} icon={<BiLogOut />} />
                </ul>
            </div>
        </Fragment>
    )
}
