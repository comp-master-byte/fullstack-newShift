import React from "react";
import styles from "./ShiftBtn.module.scss"
import cn from "classnames";

export const ShiftBtn = (props) => {

    const { btnText, primary, error } = props;

    return (
        <button
            className={cn(styles.shiftBtn, {
                [styles.shiftBtnError]: error,
                [styles.shiftBtnPrimary]: primary
            })}
        >
            {btnText}
        </button>
    )
}
