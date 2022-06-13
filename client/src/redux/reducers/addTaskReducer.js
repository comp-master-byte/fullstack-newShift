import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../types";

const initialState = {
    data: [
        {
            id: 1,
            icon: "⭕️",
            status: "to do",
            title: "Human Interest Form",
            content: "Fill out human interest distribution form",
            taskAssignedIn:"13.06.2022",
            taskFinishedIn:"15.06.2022"
        }
    ]
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
                        item.title = action.payload.title ,
                        item.content = action.payload.content;
                    };
                    return item;
                })
            };
        case DELETE_TASK:
            return {...state, data: state.data.filter(item => item.id !== parseInt(action.payload))}
        default:
            return state;
    };
};