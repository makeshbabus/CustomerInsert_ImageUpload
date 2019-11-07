import axios from 'axios';
import { INSERT_ACTION } from "./types";

export const insertCust = (cust) => async dispatch => {
    console.log("customer insert");

    const res = await axios.post('./api/custom', cust)
                .then(function (response){
                    return(response);
                })
                .catch(function(error){
                    console.log(error);
                })
    dispatch({type:INSERT_ACTION, payload: res.data});
};