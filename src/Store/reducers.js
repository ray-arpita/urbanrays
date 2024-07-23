import {combineReducers} from '@reduxjs/toolkit';
import registerReducer from './slices/registerUser.Slice';
import cartSlice from './slices/cart.Slice';

const rootReducer = combineReducers({
    register : registerReducer,
    cart : cartSlice,
})
export default rootReducer;