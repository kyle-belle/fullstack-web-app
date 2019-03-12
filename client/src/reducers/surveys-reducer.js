import {FETCH_SURVEYS, FETCH_RECIPIENTS, HIDE_RECIPIENTS} from "../actions/types";

export default function(state = {surveys:[], recipients:[]}, action){
    
    switch(action.type){

        case FETCH_SURVEYS:
            return {...state, surveys: action.payload.reverse() || false};

        case FETCH_RECIPIENTS:
            console.log(action.payload[0]);
            return {...state, recipients: action.payload[0].recipients, show_id: action.payload[0]._id};

        case HIDE_RECIPIENTS:
            return {...state, show_id: false};

        default:
            return state;
    }
}