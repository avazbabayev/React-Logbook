import {combineReducers}from "redux";
import {bookred}from "./bookReducer"
import {loginred} from "./loginReducer"
import {tripreducer} from "./tripReducer"

export default combineReducers({
    books: bookred,
    login:loginred,
    trip:tripreducer
})