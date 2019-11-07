import { combineReducers } from 'redux';
import custListReducer from "./custListReducer";

export default combineReducers({
    customerList:custListReducer,
});