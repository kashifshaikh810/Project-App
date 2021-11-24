import {combineReducers} from 'redux';
import {AddList} from '../Reducers/Reducers';

const RootReducer = combineReducers({add: AddList});

export default RootReducer;