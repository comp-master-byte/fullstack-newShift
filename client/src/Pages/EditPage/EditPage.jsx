import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { AlertComponent } from "../../components/Alert/AlertComponent.jsx";
import { Form } from "../../components/Form/Form.jsx";
import { deleteTaskActionCreator, editTaskActionCreator, hideAlertActionCreator, hideErrorAlertActionCreator, hideSuccessAlertActionCreator, showAlertActionCreator, showErrorAlertActionCreator, showSuccessAlertActionCreator } from "../../redux/actions.js";
import { ConfirmationModal } from "../../UI/ConfirmationModal/ConfirmationModal.jsx";

export const EditPage = () => {

    const { taskId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const isShowAlert = useSelector(state => state.isShowAlert.isShowAlert);
    const isShowSuccessAlert = useSelector(state => state.isShowAlert.successAlert);
    const isShowErrorAlert = useSelector(state => state.isShowAlert.errorAlert);


    const [newDataTask, setNewDataTask] = useState({ title: "", content: "" });
    const [isVisible, setIsVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [confirmText, setConfirmText] = useState("");

    function dataSubmitHandler(event) {

        event.preventDefault();

        const taskEdited = {
            id: taskId,
            title: newDataTask.title,
            content: newDataTask.content
        };

        if (!taskEdited.content || !taskEdited.title) {
            dispatch(showAlertActionCreator());
            setTimeout(() => {
                dispatch(hideAlertActionCreator());
            }, 2000);
            return;
        }

        dispatch(editTaskActionCreator(taskEdited));
        dispatch(showErrorAlertActionCreator());
        setTimeout(() => {
            dispatch(hideErrorAlertActionCreator())
        }, 2000)
        setNewDataTask({ title: "", content: "" });
    }

    const closeEditModalHandler = () => setIsVisible(false);
    const confirmDeleteCloseModal = () => setIsDeleteVisible(false);

    const confirmEditActionHandler = () => {
        setIsVisible(true);
        setConfirmText("Вы действительно хотите отменить редактирование?");
    }

    const confirmDeleteActionHandler = () => {
        setIsDeleteVisible(true);
        setConfirmText("Вы действительно хотите удалить задачу?");
    }

    const confirmEditSuccessActionHandler = () => {
        setIsVisible(false);
        setNewDataTask({ title: "", content: "" });
        navigate("/");
    }

    const confirmDeleteSuccessActionHandler = () => {
        setIsDeleteVisible(false);
        dispatch(deleteTaskActionCreator(taskId));
        dispatch(showSuccessAlertActionCreator());
        setTimeout(() => dispatch(hideSuccessAlertActionCreator()), 3000);
    }

    useEffect(() => {
        return () => dispatch(hideAlertActionCreator());
    }, []);

    useEffect(() => {
        return () => dispatch(hideSuccessAlertActionCreator());
    }, [])

    useEffect(() => {
        return () => dispatch(hideErrorAlertActionCreator());
    }, []);

    return (
        <div>

            {isShowAlert &&
                <AlertComponent variant={"danger"} alertText={"Ой, вы не заполнили поля для изменения задачи!!!"} />
            }

            {isShowSuccessAlert &&
                <AlertComponent variant={"success"} alertText={"Задача успешно удалена"} />
            }

            {isShowErrorAlert &&
                <AlertComponent variant={"success"} alertText={"Задача успешно изменена"} />
            }

            <Form
                titleText={"Страница редактирования задачи"}
                onSubmit={dataSubmitHandler}
                titleValue={newDataTask.title}
                contentValue={newDataTask.content}
                onChangeTitle={event => setNewDataTask({ ...newDataTask, title: event.target.value })}
                onChangeContent={event => setNewDataTask({ ...newDataTask, content: event.target.value })}
                confirmEditAction={confirmEditActionHandler}
                confirmDeleteAction={confirmDeleteActionHandler}
                primaryBtnText={"Изменить"}
                editPageButtons
            />

            {/* Для редактирования */}
            <ConfirmationModal
                visible={isVisible}
                onClose={closeEditModalHandler}
                actionText={confirmText}
                successClick={confirmEditSuccessActionHandler}
                errorClick={closeEditModalHandler}
            />

            {/* Для удаления */}
            <ConfirmationModal
                visible={isDeleteVisible}
                onClose={confirmDeleteCloseModal}
                actionText={confirmText}
                successClick={confirmDeleteSuccessActionHandler}
                errorClick={confirmDeleteCloseModal}
            />
        </div>
    )
}
