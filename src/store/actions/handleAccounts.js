import Axios from "axios"
const GET_RANDOM_ACCOUNTS_START = "GET_RANDOM_ACCOUNTS_START"
const GET_RANDOM_ACCOUNTS_SUCCESS = "GET_RANDOM_ACCOUNTS_SUCCESS"
const GET_RANDOM_ACCOUNTS_FAIL = "GET_RANDOM_ACCOUNTS_FAIL"
const GET_RANDOM_SUGGESTED_ACCOUNTS_START = "GET_RANDOM_SUGGESTED_ACCOUNTS_START"
const GET_RANDOM_SUGGESTED_ACCOUNTS_SUCCESS = "GET_RANDOM_SUGGESTED_ACCOUNTS_SUCCESS"
const GET_RANDOM_SUGGESTED_ACCOUNTS_FAIL = "GET_RANDOM_SUGGESTED_ACCOUNTS_FAIL"

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


export {
    GET_RANDOM_ACCOUNTS_START,
    GET_RANDOM_ACCOUNTS_SUCCESS,
    GET_RANDOM_ACCOUNTS_FAIL,
    GET_RANDOM_SUGGESTED_ACCOUNTS_START,
    GET_RANDOM_SUGGESTED_ACCOUNTS_SUCCESS,
    GET_RANDOM_SUGGESTED_ACCOUNTS_FAIL
}