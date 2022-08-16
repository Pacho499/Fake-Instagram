import * as actionTypes from "../actions/handleAuth"

const initialState = {
    email: null,
    token:null,
    localId:null,
    loading:false,
    error:false,
    name:null,
    username:null,
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case(actionTypes).SIGN_UP_START:
            return{
                ...state,
                loading:true
            }
        case(actionTypes).SIGN_UP_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                email: action.email,
                token: action.token,
                localId:action.localId,
                name:action.name,
                username:action.username,

            }
        case(actionTypes).SIGN_UP_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case(actionTypes).LOG_IN_START:
            return{
                ...state,
                loading:true,
            }
        case(actionTypes).LOG_IN_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                email:action.email,
                token:action.token,
            }
        case(actionTypes).LOG_IN_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }

        default :
            return state
    }
}

export default reducer