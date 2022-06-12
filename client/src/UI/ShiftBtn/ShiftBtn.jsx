import React from "react";
import styles from "./ShiftBtn.module.scss"
import cn from "classnames";

export const ShiftBtn = (props) => {

    const {
        btnText,
        primary,
        error,
        warning,
        success,
        onClick,
        ...rest
    } = props;

    return (
        <button
            type="text"
            onClick={onClick}
            className={cn(styles.shiftBtn, {
                [styles.shiftBtnError]: error,
                [styles.shiftBtnPrimary]: primary,
                [styles.shiftBtnWarning]: warning,
                [styles.shiftBtnSuccess]: success
            })}
            {...rest}
        >
            {btnText}
        </button>
    )
}
