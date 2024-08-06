import { combineReducers } from '@reduxjs/toolkit';
import operatorReducer from 'slices/operatorSlice';

const rootReducer = combineReducers({
    operator: operatorReducer, //todo: only 1 reducer
});

export default rootReducer;
