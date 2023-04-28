import { combineReducers } from 'redux';
import AmountReducer from './AmountReducer';

export default combineReducers({
    amount: AmountReducer
})