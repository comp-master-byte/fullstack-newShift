import React, { useState } from "react";
import { useDispatch } from "react-redux"
import styles from "./CreateTaskPage.module.scss";
import { addTaskActionCreator } from "../../redux/actions";
import { Form } from "../../components/Form/Form.jsx";

export const CreateTaskPage = () => {

    const dispatch = useDispatch();

    const [newDataTask, setNewDataTask] = useState({ title: "", content: "" });

    function dataSubmitHandler(event) {
        event.preventDefault();

        const newTaskCreated = {
            ...newDataTask,
            id: Date.now() + 1,
            status: "to do",
            icon: "⭕️"
        };

        if (!newTaskCreated.content || !newTaskCreated.title) {
            return
        };

        dispatch(addTaskActionCreator(newTaskCreated));
        setNewDataTask({ title: "", content: "" });
    }

    return (
        <div className={styles.creationWrapper}>
            <Form
                titleText="Форма создания задачи"
                onSubmit={event => dataSubmitHandler(event)}
                titleValue={newDataTask.title}
                contentValue={newDataTask.content}
                onChangeTitle={event => setNewDataTask({ ...newDataTask, title: event.target.value })}
                onChangeContent={event => setNewDataTask({ ...newDataTask, content: event.target.value })}
            />
        </div>
    )
}
