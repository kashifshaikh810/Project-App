import { ADD_LIST } from '../Actions/ActionTypes';

export const AddList = (list) => {
    return (dispatch) => {
        dispatch({ type: ADD_LIST, list: list })
    }
}