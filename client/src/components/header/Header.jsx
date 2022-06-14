import React, { Fragment, useState } from "react";
import styles from "./Header.module.scss";
import { ImTrello } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AlertComponent } from "../Alert/AlertComponent.jsx";
import { ShiftPrompt } from "../../UI/Prompt/ShiftPrompt.jsx";

export const Header = (props) => {

    const { showNavigation, toggle } = props;

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
                    <div className={styles.headerPrompts}>
                        {!showNavigation &&
                            <ShiftPrompt
                                icon={<AiOutlineMenuFold size="20" />}
                                onClick={toggle}
                                promptText="Открыть меню"
                            />
                        }
                        <ShiftPrompt
                            promptText="Подсказка"
                            icon={<GrReactjs size="20" />}
                            onClick={togglePrompt}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
