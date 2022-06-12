import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form.jsx";
import { editTaskActionCreator } from "../../redux/actions.js";

export const EditPage = () => {

    const { taskId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [newDataTask, setNewDataTask] = useState({ title: "", content: "" });

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

    return (
        <div>
            <Form
                titleText={"Страница редактирования задачи"}
                onSubmit={dataSubmitHandler}
                titleValue={newDataTask.title}
                contentValue={newDataTask.content}
                onChangeTitle={event => setNewDataTask({ ...newDataTask, title: event.target.value })}
                onChangeContent={event => setNewDataTask({ ...newDataTask, content: event.target.value })}
            />
        </div>
    )
}
