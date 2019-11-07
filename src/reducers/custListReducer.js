import { LISTCUST_ACTION } from '../actions/types.js';

export default function(state=[], action){
    switch(action.type){
        case LISTCUST_ACTION:
            return action.payload;
        default:
            return state;
    }
}