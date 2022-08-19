import {combineReducers} from "redux"
import accountsReducer from "./accountsReducer"
import authReducer from "./authReducer"
import photoReducer from "./photoReducer"

const rootReducer = combineReducers({
    accountsReducer,
    authReducer,
    photoReducer,
})

export default rootReducer