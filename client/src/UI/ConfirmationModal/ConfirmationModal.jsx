import React from "react";
import styles from "./ConfirmationModal.module.scss";
import Modal from "react-modal"
import { ShiftBtn } from "../ShiftBtn/ShiftBtn.jsx";

export const ConfirmationModal = (props) => {

    const {
        visible,
        onClose,
        actionText,
        successClick,
        errorClick
    } = props;

    return (
        <Modal
            isOpen={visible}
            onRequestClose={onClose}
            className={styles.confirmationModal}
            overlayClassName={styles.confirmationModalOverlay}
        >
            <div className={styles.confirmationModal__title}>Подтвердите свои действия на странице!</div>
            <div className={styles.confirmationModal__text}>{actionText}</div>
            <div className={styles.confirmationModal__btns}>
                <ShiftBtn onClick={successClick} success btnText={"Да"} />
                <ShiftBtn onClick={errorClick} error btnText={"Нет"} />
            </div>
        </Modal>
    )
}
