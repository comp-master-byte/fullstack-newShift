import React from "react";
import styles from "./ConfirmationModal.module.scss";
import Modal from "react-modal"

export const ConfirmationModal = (props) => {

    const { children, visible, onClose, actionText } = props;

    return (
        <Modal
            isOpen={visible}
            onRequestClose={onClose}
            className={styles.confirmationModal}
            overlayClassName={styles.confirmationModalOverlay}
        >
            <div>Подтвердите свои действия на странице!</div>
            <div>Вы действительно хотите {actionText} данную задачу</div>
        </Modal>
    )
}
