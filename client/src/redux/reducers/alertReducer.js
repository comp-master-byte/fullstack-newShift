import { HIDE_ALERT, HIDE_ERROR_ALERT, HIDE_SUCCESS_ALERT, SHOW_ALERT, SHOW_ERROR_ALERT, SHOW_SUCCESS_ALERT } from "../types"

const initialState = {
    isShowAlert: false,
    successAlert: false,
    errorAlert: false,
}

export const alertReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return {...state, isShowAlert: true};
        case HIDE_ALERT:
            return {...state, isShowAlert: false};
        case SHOW_SUCCESS_ALERT:
            return {...state, successAlert: true};
        case HIDE_SUCCESS_ALERT:
            return {...state, successAlert: false};
        case SHOW_ERROR_ALERT:
            return {...state, errorAlert: true};
        case HIDE_ERROR_ALERT:
            return {...state, errorAlert: false}
        default:
            return state;
    };
};