import cartSlice from './cartSlice';
import filterSlice from './filterSlice';
import {combineReducers} from 'redux';

export default combineReducers({ cartSlice, filterSlice })