import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form.jsx";
import { deleteTaskActionCreator, editTaskActionCreator } from "../../redux/actions.js";
import { ConfirmationModal } from "../../UI/ConfirmationModal/ConfirmationModal.jsx";

export const EditPage = () => {

    const { taskId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [newDataTask, setNewDataTask] = useState({ title: "", content: "" });
    const [isVisible, setIsVisible] = useState(false)
    const [isDeleteVisible, setIsDeleteVisible] = useState(false)
    const [confirmText, setConfirmText] = useState("")

    function dataSubmitHandler(event) {

        event.preventDefault();

        const taskEdited = {
            id: taskId,
            title: newDataTask.title,
            content: newDataTask.content
        };

        if (!taskEdited.content || !taskEdited.title) {
            return;
        };

        dispatch(editTaskActionCreator(taskEdited));
        setNewDataTask({ title: "", content: "" });

        navigate('/');

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
        console.log("Задача удалена")
        setIsDeleteVisible(false);
        dispatch(deleteTaskActionCreator(taskId))
    }


    return (
        <div>
            <Form
                titleText={"Страница редактирования задачи"}
                onSubmit={dataSubmitHandler}
                titleValue={newDataTask.title}
                contentValue={newDataTask.content}
                onChangeTitle={event => setNewDataTask({ ...newDataTask, title: event.target.value })}
                onChangeContent={event => setNewDataTask({ ...newDataTask, content: event.target.value })}
                confirmEditAction={confirmEditActionHandler}
                confirmDeleteAction={confirmDeleteActionHandler}
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
