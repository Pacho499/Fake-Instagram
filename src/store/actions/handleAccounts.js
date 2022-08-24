import Axios from "axios"
const GET_RANDOM_ACCOUNTS_START = "GET_RANDOM_ACCOUNTS_START"
const GET_RANDOM_ACCOUNTS_SUCCESS = "GET_RANDOM_ACCOUNTS_SUCCESS"
const GET_RANDOM_ACCOUNTS_FAIL = "GET_RANDOM_ACCOUNTS_FAIL"
const GET_RANDOM_SUGGESTED_ACCOUNTS_START = "GET_RANDOM_SUGGESTED_ACCOUNTS_START"
const GET_RANDOM_SUGGESTED_ACCOUNTS_SUCCESS = "GET_RANDOM_SUGGESTED_ACCOUNTS_SUCCESS"
const GET_RANDOM_SUGGESTED_ACCOUNTS_FAIL = "GET_RANDOM_SUGGESTED_ACCOUNTS_FAIL"
const GET_MAIN_ACCOUNT_USERNAME_START = "GET_MAIN_ACCOUNT_USERNAME_START"
const GET_MAIN_ACCOUNT_USERNAME_SUCCESS = "GET_MAIN_ACCOUNT_USERNAME_SUCCESS"
const GET_MAIN_ACCOUNT_USERNAME_FAIL = "GET_ MAIN_ACCOUNT_USERNAME_FAIL"

export const getRandomAccounts = () => {
    return async dispatch => {
        dispatch(getRandomAccountsStart())
        try {
            const response = await Axios.get("https://randomuser.me/api/?results=20")
            const data = await response.data.results
            const accountsData = []
            for (let key in data) {
                accountsData.push(data[key])
            }

            dispatch(getRandomAccountsSuccess(accountsData))
        } catch (error) {
            console.log(error)
            dispatch(getRandomAccountsFail(error))
        }
    }
    
}

export const getRandomAccountsStart = () => {
    return{
        type: GET_RANDOM_ACCOUNTS_START
    }
}

export const getRandomAccountsSuccess = (accountsData) => {
    return {
        type: GET_RANDOM_ACCOUNTS_SUCCESS,
        accountsData,
    }
}

export const getRandomAccountsFail = (error) => {
    return{
        type: GET_RANDOM_ACCOUNTS_FAIL,
        error: error
    }
}

export const getRandomSuggestedAccounts = () => {
    return async dispatch => {
        dispatch(getRandomSuggestedAccountsStart())
        try {
            const response = await Axios.get("https://randomuser.me/api/?results=5")
            const data = await response.data.results
            const suggestedAccountsData = []
            for (let key in data) {
                suggestedAccountsData.push(data[key])
            }

            dispatch(getRandomSuggestedAccountsSuccess(suggestedAccountsData))
        } catch (error) {
            console.log(error)
            dispatch(getRandomSuggestedAccountsFail(error))
        }
    }
    
}

export const getRandomSuggestedAccountsStart = () => {
    return{
        type: GET_RANDOM_SUGGESTED_ACCOUNTS_START
    }
}

export const getRandomSuggestedAccountsSuccess = (suggestedAccountsData) => {
    return {
        type: GET_RANDOM_SUGGESTED_ACCOUNTS_SUCCESS,
        suggestedAccountsData,
    }
}

export const getRandomSuggestedAccountsFail = (error) => {
    return{
        type: GET_RANDOM_SUGGESTED_ACCOUNTS_FAIL,
        error: error
    }
}
export const getMainAccountUserName = () => {
    return async dispatch => {
        dispatch(getMainAccountUserNameStart())
        const localId = localStorage.getItem("userId")
        try {
            const response = await Axios.get(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/data.json`)
            const data = await response.data
            dispatch(getMainAccountUserNameSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(getMainAccountUserNameFail(error))
        }
    }
    
}

export const getMainAccountUserNameStart = () => {
    return{
        type: GET_MAIN_ACCOUNT_USERNAME_START
    }
}

export const getMainAccountUserNameSuccess = (data) => {
    return {
        type: GET_MAIN_ACCOUNT_USERNAME_SUCCESS,
        realName:data.realName,
        userName:data.userName,
        
    }
}

export const getMainAccountUserNameFail = (error) => {
    return{
        type: GET_MAIN_ACCOUNT_USERNAME_FAIL,
        error: error
    }
}


export {
    GET_RANDOM_ACCOUNTS_START,
    GET_RANDOM_ACCOUNTS_SUCCESS,
    GET_RANDOM_ACCOUNTS_FAIL,
    GET_RANDOM_SUGGESTED_ACCOUNTS_START,
    GET_RANDOM_SUGGESTED_ACCOUNTS_SUCCESS,
    GET_RANDOM_SUGGESTED_ACCOUNTS_FAIL,
    GET_MAIN_ACCOUNT_USERNAME_START,
    GET_MAIN_ACCOUNT_USERNAME_SUCCESS,
    GET_MAIN_ACCOUNT_USERNAME_FAIL
}