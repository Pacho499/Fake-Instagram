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
        case(actionTypes).AUTH_START:
            return{
                ...state,
                loading:true
            }
        case(actionTypes).AUTH_SUCCESS:
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
        case(actionTypes).AUTH_FAIL:
            return{
                ...state,
                loading:false,
                error:true
            }

        default :
            return state
    }
}

export default reducer