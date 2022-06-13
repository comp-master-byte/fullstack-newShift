import React from "react";
import styles from "./ResultOfAction.module.scss";
import { Link } from "react-router-dom";

export const ResultOfAction = (props) => {

    const { resultText, to, goWhere } = props;

    return (
        <div className={styles.resultOfAction}>
            <div className={styles.resultOfAction__redirectText}>
                {resultText} Перейти на <Link to={to}>{goWhere}</Link>
            </div>
        </div>
    )
}
