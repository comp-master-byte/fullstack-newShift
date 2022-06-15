import React, { Fragment } from "react";
import styles from "./Form.module.scss";
import { ShiftInput } from "../../UI/ShiftInput/ShiftInput.jsx";
import { ShiftBtn } from "../../UI/ShiftBtn/ShiftBtn.jsx";
import { ShiftDatePicker } from "../ShiftDatePicker/ShiftDatePicker.jsx";

export const Form = (props) => {

    const {
        onSubmit,
        titleValue,
        contentValue,
        dateValue,
        onChangeTitle,
        onChangeContent,
        onChangeDate,
        titleText,
        confirmEditAction,
        confirmDeleteAction,
        editPageButtons,
        primaryBtn,
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

                <div className={styles.form__datepicker}>
                    <ShiftDatePicker
                        selectedDate={dateValue}
                        setSelectedDate={onChangeDate}
                    />
                </div>

                <div className={styles.formSubmit__btn}>
                    {editPageButtons &&
                        <>
                            <ShiftBtn isDisabled={isDisabled} onClick={confirmEditAction} btnText={"Отменить"} warning />
                            <ShiftBtn isDisabled={isDisabled} onClick={confirmDeleteAction} btnText={"Удалить"} error />
                        </>
                    }

                    <ShiftBtn isDisabled={isDisabled} onClick={onSubmit} btnText={primaryBtn} primary />
                </div>
            </div>
        </div>
    )
}
