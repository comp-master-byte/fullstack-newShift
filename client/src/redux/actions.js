import { 
    ADD_TASK, DELETE_TASK, EDIT_STATUS_ON_DROP, EDIT_TASK, HIDE_ALERT, HIDE_ERROR_ALERT, HIDE_SUCCESS_ALERT, SHOW_ALERT, SHOW_ERROR_ALERT, SHOW_SUCCESS_ALERT 
} from "./types";

export const addTaskActionCreator = payload => ({type: ADD_TASK, payload});
export const editTaskActionCreator = payload => ({type: EDIT_TASK, payload});
export const deleteTaskActionCreator = payload => ({type: DELETE_TASK, payload});
export const showAlertActionCreator = () => ({type: SHOW_ALERT});
export const hideAlertActionCreator = () => ({type: HIDE_ALERT});
export const showSuccessAlertActionCreator = () => ({type: SHOW_SUCCESS_ALERT});
export const hideSuccessAlertActionCreator = () => ({type: HIDE_SUCCESS_ALERT});
export const showErrorAlertActionCreator = () => ({type: SHOW_ERROR_ALERT});
export const hideErrorAlertActionCreator = () => ({type: HIDE_ERROR_ALERT});
export const editStatusActionCreator = payload => ({type: EDIT_STATUS_ON_DROP, payload})