import {combineReducers} from "redux"
import accountsReducer from "./accountsReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
    accountsReducer,
    authReducer
})

export default rootReducer