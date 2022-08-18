import * as actionTypes from "../actions/handleAccounts"

const initialState = {
    loading:false,
    error:false,
    accountsData:[],
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RANDOM_ACCOUNTS_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.GET_RANDOM_ACCOUNTS_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                accountsData:action.accountsData
                
            }
        case actionTypes.GET_RANDOM_ACCOUNTS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }
    
        default:
            return{
                ...state
            }
    }
}

export default reducer;