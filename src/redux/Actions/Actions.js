import { ADD_LIST, REMOVE_LIST, UPDATE_LIST } from '../Actions/ActionTypes';

export const AddList = (val) => {
    return (dispatch) => {
        dispatch({ type: ADD_LIST, list: val })
    }
}

export const RemoveList = (removeVal) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_LIST, todo: removeVal})
    }
}

export const UpdateList = (ind, val, exist) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_LIST, index: ind, value: val, existVal: exist})
    }
}