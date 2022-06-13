import React from "react";
import styles from "./AlertComponent.module.scss";
import cn from "classnames";

export const AlertComponent = (props) => {

    const { alertText, variant } = props;

    return (
        <div
            className={cn(styles.alertWrapper, {
                [styles.alertSuccess]: variant === "success",
                [styles.alertDanger]: variant === "danger",
                [styles.alertError]: variant === "error",
            })}
        >
            <div className={styles.alertWrapper__text}>{alertText}</div>
        </div>
    )
}
