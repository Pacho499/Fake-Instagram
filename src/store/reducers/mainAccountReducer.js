import * as actionTypes from "../actions/handleMainAccount"

const initialState = {
    realName:null,
    userName:null,
    bio:null,
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case(actionTypes).CHANGE_MAIN_ACCOUNT_DATA_START:
            return{
                ...state,
                loading:true
            }
        case(actionTypes).CHANGE_MAIN_ACCOUNT_DATA_SUCCESS:
            return{
                ...state,
                realName:action.realName,
                userName:action.userName,
                bio:action.bio
            }
        case(actionTypes).CHANGE_MAIN_ACCOUNT_DATA_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error,
            }
        case(actionTypes).GET_MAIN_ACCOUNT_DATA_START:
            return{
                ...state,
                loading:true
            }
        case(actionTypes).GET_MAIN_ACCOUNT_DATA_SUCCESS:
            return{
                ...state,
                realName:action.realName,
                userName:action.userName,
                bio:action.bio
            }
        case(actionTypes).GET_MAIN_ACCOUNT_DATA_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error,
            }
        default :
        return state
    }
}

export default reducer