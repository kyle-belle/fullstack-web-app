import {combineReducers} from "redux";
import auth_reducer from "./auth-reducer";

export default combineReducers({
    auth: auth_reducer
});