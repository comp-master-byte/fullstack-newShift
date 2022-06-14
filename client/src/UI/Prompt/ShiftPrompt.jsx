import React from 'react';
import styles from "./ShiftPrompt.module.scss";

export const ShiftPrompt = (props) => {

    const {
        promptText,
        icon,
        onClick,
        className,
        ...rest
    } = props;

    return (
        <div
            onClick={onClick}
            className={styles.shiftPrompt}
            {...rest}
        >
            {icon}
            <div className={styles.shiftPrompt__title}>
                {promptText}
            </div>
        </div>
    )
}
