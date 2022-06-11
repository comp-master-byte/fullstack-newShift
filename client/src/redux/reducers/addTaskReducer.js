import { ADD_TASK } from "../types"

const initialState = {
    data: [
        {
            id: 1,
            icon: "⭕️",
            status: "to do",
            title: "Human Interest Form",
            content: "Fill out human interest distribution form"
        }, 
        {
            id: 2,
            icon: "⭕️",
            status: "to do",
            title: "Purchase present",
            content: "Get an anniversary gift"
        }, {
            id: 3,
            icon: "⭕️",
            status: "to do",
            title: "Invest in investments",
            content: "Call the bank to talk about investments"
        }, {
            id: 4,
            icon: "⭕️",
            status: "to do",
            title: "Daily reading",
            content: "Finish reading Intro to UI/UX"
        }
    ]
}

export const addTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {...state, data: state.data.concat(action.payload)}
        default:
            return state
    }
}