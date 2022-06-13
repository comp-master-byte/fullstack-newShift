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
        titleText,
        confirmEditAction,
        confirmDeleteAction,
        primaryBtnText,
        editPageButtons,
        isDisabled
    } = props;

    return (
        <div className={styles.creationWrapper}>
            <div className={styles.form__title}>{titleText}</div>
            <div className={styles.form}>
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

                <div className={styles.formSubmit__btn}>
                    {editPageButtons &&
                        <>
                            <ShiftBtn isDisabled={isDisabled} onClick={confirmDeleteAction} btnText={"Удалить"} error />
                            <ShiftBtn isDisabled={isDisabled} onClick={confirmEditAction} btnText={"Отменить"} warning />
                        </>
                    }

                    <ShiftBtn isDisabled={isDisabled} onClick={onSubmit} btnText={primaryBtnText} primary />
                </div>
            </div>
        </div>
    )
}
