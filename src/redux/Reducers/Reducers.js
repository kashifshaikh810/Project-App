import { ADD_LIST, REMOVE_LIST, UPDATE_LIST } from '../Actions/ActionTypes';

const initialState = {
    todo: []
}

export const AddList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return {
                ...state,
                todo: [...state.todo, action.list]
            };
            break;
        case REMOVE_LIST:
            return {
                ...state,
                todo: [...state.todo.splice(action.todo, 1), ...state.todo]
            }
            break;
        case UPDATE_LIST:
            return {
                ...state,
                todo: [...state.todo.splice(state.todo.indexOf(action.existVal), 1, action.value)],
                todo: [...state.todo]
            }
            break;
        default:
            return state
    }
}