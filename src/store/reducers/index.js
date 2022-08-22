import {combineReducers} from "redux"
import accountsReducer from "./accountsReducer"
import authReducer from "./authReducer"
import photoReducer from "./photoReducer"
import mainAccountReducer from "./mainAccountReducer"

const rootReducer = combineReducers({
    accountsReducer,
    authReducer,
    photoReducer,
    mainAccountReducer,
})

export default rootReducer