import axios from 'axios';
import { LISTCUST_ACTION } from "./types";

export const custList = () => async dispatch => {
    console.log("customer list");

    const res = await axios.get('./api/list')
                .then(function (response){
                    return(response);
                })
                .catch(function(error){
                    console.log(error);
                })
    dispatch({type:LISTCUST_ACTION, payload: res.data});
};