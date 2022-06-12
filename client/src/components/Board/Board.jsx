import React from "react";
import styles from "./Board.module.scss"

export const Board = (props) => {

    const { isOver, children } = props;
    const className = isOver ? styles.highlightRegion : "";

    return (
        <div className={`${styles.col} && ${className}`}>
            {children}
        </div>
    )
}
