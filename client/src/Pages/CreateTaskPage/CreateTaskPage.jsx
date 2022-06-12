import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import styles from "./CreateTaskPage.module.scss";
import { ShiftInput } from '../../UI/ShiftInput/ShiftInput.jsx';
import { addTaskActionCreator } from '../../redux/actions';

export const CreateTaskPage = () => {

    const dispatch = useDispatch();

    const [newDataTask, setNewDataTask] = useState({ title: "", content: "" })

    function dataSubmitHandler(event) {
        event.preventDefault()

        const newTaskCreated = {
            ...newDataTask,
            id: Date.now() + 1,
            status: "to do",
            icon: "⭕️"
        }

        if (!newTaskCreated.content || !newTaskCreated.title) {
            return
        }

        dispatch(addTaskActionCreator(newTaskCreated))
        setNewDataTask({ title: "", content: "" })
    }

    return (
        <div className={styles.creationWrapper}>
            <div className={styles.creationWrapper__title}>Форма создания задачи</div>
            <form className={styles.creationWrapper__form} onSubmit={event => dataSubmitHandler(event)}>
                <ShiftInput
                    value={newDataTask.title}
                    onChange={event => setNewDataTask({ ...newDataTask, title: event.target.value })}
                    type="text"
                    placeholder="task title"
                    className={styles.creationWrapper__input}
                />

                <ShiftInput
                    value={newDataTask.content}
                    onChange={event => setNewDataTask({ ...newDataTask, content: event.target.value })}
                    type="text"
                    placeholder="task content"
                    className={styles.creationWrapper__input}
                />
                <div className={styles.creationWrapper__btn}>
                    <ShiftInput type='submit' />
                </div>
            </form>
        </div>
    )
}
