import { combineReducers } from '@reduxjs/toolkit';
import operatorReducer from 'slices/operatorSlice';

const rootReducer = combineReducers({
    operator: operatorReducer,
});

export default rootReducer;
