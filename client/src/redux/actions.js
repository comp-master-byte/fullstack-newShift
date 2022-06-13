import { ADD_TASK, DELETE_TASK, EDIT_TASK, HIDE_ALERT, SHOW_ALERT } from "./types";

export const addTaskActionCreator = payload => ({type: ADD_TASK, payload});
export const editTaskActionCreator = payload => ({type: EDIT_TASK, payload});
export const deleteTaskActionCreator = payload => ({type: DELETE_TASK, payload});
export const showAlertActionCreator = () => ({type: SHOW_ALERT});
export const hideAlertActionCreator = () => ({type: HIDE_ALERT});