import { combineReducers } from 'redux';
import aReducer from './a.reducer';

export default combineReducers({
    a: aReducer,
});
