import React, { Fragment, useState } from "react";
import styles from "./Header.module.scss";
import { ImTrello } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { AlertComponent } from "../Alert/AlertComponent.jsx"

export const Header = () => {

    const [showPrompt, setShowPrompt] = useState(false);

    const togglePrompt = () => setShowPrompt(prev => !prev);

    setTimeout(() => setShowPrompt(false), 5000);

    return (
        <Fragment>
            <div className={showPrompt ? styles.headerAlertShow : styles.headerAlertHide}>
                <AlertComponent alertText="Нажмите на задачу и сможете отредактировать её!" />
            </div>
            <div className={styles.header}>
                <div className={styles.headerRow}>
                    <div className={styles.headerTitle}>
                        <div className={styles.headerTitle__logo}>
                            <ImTrello size="20" />
                        </div>
                        <div className={styles.headerTitle__title}>
                            Task Desk
                        </div>
                    </div>
                    <div onClick={togglePrompt} className={styles.headerPrompt}>
                        <GrReactjs size="20" />
                        <div className={styles.headerPrompt__title}>
                            Подсказка
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
