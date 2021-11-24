import {ADD_LIST} from '../Actions/ActionTypes';

const initialState = {
    list: [{list: 'dffafd'}, {list: 'dffafd'}, {list: 'dffafd'}]
}

export const AddList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return {
                ...state
            }
        default:
            return state
    }
}