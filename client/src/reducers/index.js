import {combineReducers} from "redux";
import auth_reducer from "./auth-reducer";
import {reducer as redux_form} from "redux-form";

export default combineReducers({
    auth: auth_reducer,
    form: redux_form
});