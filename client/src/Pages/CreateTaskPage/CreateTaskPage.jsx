import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskActionCreator, hideAlertActionCreator, hideSuccessAlertActionCreator, showAlertActionCreator, showSuccessAlertActionCreator } from "../../redux/actions";
import { Form } from "../../components/Form/Form.jsx";
import { AlertComponent } from "../../components/Alert/AlertComponent.jsx";
import { ResultOfAction } from "../../components/resultOfAction/ResultOfAction.jsx";
import moment from "moment";

export const CreateTaskPage = () => {

    const dispatch = useDispatch();

    const isShowAlert = useSelector(state => state.isShowAlert.isShowAlert);
    const isShowSuccessAlert = useSelector(state => state.isShowAlert.successAlert);

    const [newDataTask, setNewDataTask] = useState({ title: "", content: "" });
    const [selectedDate, setSelectedDate] = useState(new Date(moment()))
    const [isAdded, setIsAdded] = useState(false);

    const handleChange = newValue => setSelectedDate(newValue);

    function dataSubmitHandler(event) {
        event.preventDefault();

        const newTaskCreated = {
            ...newDataTask,
            taskAssignedIn: moment(selectedDate).format("DD.MM.YYYY"),
            id: Date.now() + 1,
            status: "to do",
            icon: "⭕️"
        };

        if (!newTaskCreated.content || !newTaskCreated.title) {
            dispatch(showAlertActionCreator());
            setTimeout(() => dispatch(hideAlertActionCreator()), 3000);
            return;
        };

        dispatch(addTaskActionCreator(newTaskCreated));
        dispatch(showSuccessAlertActionCreator());
        setTimeout(() => dispatch(hideSuccessAlertActionCreator()), 3000);
        setNewDataTask({ title: "", content: "" });
        setIsAdded(true);
    }

    // ComponentWillUnmount
    useEffect(() => {
        return () => dispatch(hideAlertActionCreator());
    }, []);

    useEffect(() => {
        return () => dispatch(hideSuccessAlertActionCreator());
    }, []);

    return (
        <Fragment>

            {isShowSuccessAlert && <AlertComponent variant={"success"} alertText="Задача успешно создана!" />}

            {isShowAlert && <AlertComponent variant={"error"} alertText="Поля ввода не могут быть пустыми!" />}

            <Form
                titleText="Форма создания задачи"
                onSubmit={event => dataSubmitHandler(event)}
                titleValue={newDataTask.title}
                contentValue={newDataTask.content}
                dateValue={selectedDate}
                onChangeTitle={event => setNewDataTask({ ...newDataTask, title: event.target.value })}
                onChangeContent={event => setNewDataTask({ ...newDataTask, content: event.target.value })}
                onChangeDate={handleChange}
                primaryBtnText={"Добавить"}
            />
            {isAdded &&
                <ResultOfAction goWhere="главную" to="/" resultText="Задача успешно создана." />
            }
        </Fragment>
    )
}
