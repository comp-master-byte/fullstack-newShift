import React, { Fragment } from "react";
import styles from "./Form.module.scss";
import { ShiftInput } from "../../UI/ShiftInput/ShiftInput.jsx";
import { ShiftBtn } from "../../UI/ShiftBtn/ShiftBtn.jsx";

export const Form = (props) => {

    const {
        onSubmit,
        titleValue,
        contentValue,
        onChangeTitle,
        onChangeContent,
        titleText
    } = props;

    return (
        <div className={styles.creationWrapper}>
            <div className={styles.form__title}>{titleText}</div>
            <form className={styles.form} onSubmit={onSubmit}>
                <ShiftInput
                    value={titleValue}
                    onChange={onChangeTitle}
                    type="text"
                    placeholder="Заголовок"
                    className={styles.form__input}
                />

                <ShiftInput
                    value={contentValue}
                    onChange={onChangeContent}
                    type="text"
                    placeholder="Описание"
                    className={styles.form__input}
                />

                <div className={styles.form__btns}>
                    <ShiftInput type='submit' placeholder="text" />
                    <ShiftBtn btnText={"Удалить"} error />
                </div>


            </form>
        </div>
    )
}
