import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./types";

export const addTaskActionCreator = payload => ({type: ADD_TASK, payload});
export const editTaskActionCreator = payload => ({type: EDIT_TASK, payload});
export const deleteTaskActionCreator = payload => ({type: DELETE_TASK, payload});