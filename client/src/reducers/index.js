import {combineReducers} from "redux";
import auth_reducer from "./auth-reducer";
import {reducer as redux_form} from "redux-form";
import surveys_reducer from "./surveys-reducer";

export default combineReducers({
    auth: auth_reducer,
    surveys: surveys_reducer,
    form: redux_form
});