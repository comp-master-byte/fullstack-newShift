import { HIDE_ALERT, SHOW_ALERT } from "../types"

const initialState = {
    isShowAlert: false
}

export const alertReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return {...state, isShowAlert: true};
        case HIDE_ALERT:
            return {...state, isShowAlert: false};
        default:
            return state
    }
}