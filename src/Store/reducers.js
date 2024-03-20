import {combineReducers} from '@reduxjs/toolkit';
import registerReducer from './slices/registerUser.Slice';

const rootReducer = combineReducers({
    register : registerReducer
})
export default rootReducer;