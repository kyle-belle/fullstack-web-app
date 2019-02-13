import axios from "axios";
import {FETCH_USER, FETCH_SURVEYS} from "./types";
import keys from "../config/keys";




export const fetch_user = () => 
    async (dispatch) => {

        const res = await axios.get(keys.url_prefix + "/api/current_user", {
            withCredentials: true
        });
        dispatch({ type: FETCH_USER,  payload: res.data});

};

export const fetch_surveys = () => 
    async (dispatch) => {

        const res = await axios.get(keys.url_prefix + "/api/surveys", {
            withCredentials: true
        });
        dispatch({ type: FETCH_SURVEYS,  payload: res.data});

};

export const handle_token = token => 
    async (dispatch) => {
        const res = await axios.post(keys.url_prefix + "/api/stripe", token, {
            withCredentials: true
        });
        dispatch({type: FETCH_USER, payload: res.data});
    
};

export const submit_survey = (values, history) => 
    async (dispatch) => {
        const res = await axios.post(keys.url_prefix + "/api/survey", values, {
            withCredentials: true
        });
        dispatch({type: FETCH_USER, payload: res.data});
        history.push("/surveys");

};