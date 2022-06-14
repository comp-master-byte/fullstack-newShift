import { ADD_TASK, DELETE_TASK, EDIT_STATUS_ON_DROP, EDIT_TASK } from "../types";

const initialState = {
    data: []
};

export const addTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {...state, data: state.data.concat(action.payload)};
        case EDIT_TASK: 
            return {
                ...state, 
                data: state.data.map(item => {
                    if(item.id === parseInt(action.payload.id)) {
                        item.title = action.payload.title,
                        item.content = action.payload.content,
                        item.taskAssignedIn = action.payload.taskAssignedIn
                    };
                    return item;
                })
            };
        case DELETE_TASK:
            return {...state, data: state.data.filter(item => item.id !== parseInt(action.payload))};
        case EDIT_STATUS_ON_DROP:
            return {...state, 
                data: state.data.map(item => {
                    if(item.id === parseInt(action.payload.id)) {
                        item.status = action.payload.status
                    }
                    return item;
                })
            }
        default:
            return state;
    };
};