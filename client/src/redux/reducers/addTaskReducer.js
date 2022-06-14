import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../types";

const initialState = {
    data: [
        {
            id: 1,
            icon: "⭕️",
            status: "to do",
            title: "Human Interest Form",
            content: "Lorem ipsum lorem lorem lorem dolor sit amet consectetur, adipisicing elit. Distinctio, quidem sunt aspernatur maiores dolor, maxime facilis sint suscipit libero dolore consequuntur dolorem pariatur veritatis eos quam? Unde quos sunt minus commodi quod tempora voluptatibus nisi nulla rem repellat. Dolore enim commodi blanditiis quos esse aspernatur dignissimos, inventore molestiae hic adipisci maxime minus deleniti reprehenderit qui totam nihil quod deserunt voluptate, accusamus eveniet placeat? Sunt deserunt non quis omnis molestias sed sit doloribus vel tenetur suscipit. Doloribus, culpa nam tempore incidunt, doloremque nisi quibusdam fuga libero quo quas harum dolores id accusamus excepturi quidem optio corrupti quaerat modi! Atque sint consequatur unde id officia amet nostrum qui beatae harum dicta, dolorem ullam deserunt perspiciatis eligendi delectus commodi incidunt sit. Dicta, quo similique blanditiis quae modi assumenda magni nulla veritatis impedit officia, ea mollitia, omnis officiis natus fugit nihil a aspernatur voluptatum!",
            taskAssignedIn:"13.06.2022",
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
                        item.title = action.payload.title,
                        item.content = action.payload.content,
                        item.taskAssignedIn = action.payload.taskAssignedIn
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