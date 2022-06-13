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
        isDisabled,
        ...rest
    } = props;

    return (
        <button
            disabled={isDisabled}
            type="text"
            onClick={onClick}
            className={cn(styles.shiftBtn, {
                [styles.shiftBtnError]: error,
                [styles.shiftBtnPrimary]: primary,
                [styles.shiftBtnWarning]: warning,
                [styles.shiftBtnSuccess]: success,
                [styles.shiftBtnDisabled]: isDisabled
            })}
            {...rest}
        >
            {btnText}
        </button>
    )
}
