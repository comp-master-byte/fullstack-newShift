import React from 'react';
import styles from "./ShiftInput.module.scss";

export const ShiftInput = (props) => {

    const { className, value, onChange, placeholder, type, ...rest } = props;

    return (
        <input
            value={value}
            onChange={onChange}
            className={type === "text" ? `${styles.shiftInput} && ${className}` : styles.shiftSubmitInput}
            type={type}
            placeholder={placeholder}
            {...rest}
        />
    )
}
