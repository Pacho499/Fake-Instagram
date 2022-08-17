import Axios from "axios"
const GET_RANDOM_ACCOUNTS_START = "GET_RANDOM_ACCOUNTS_START"
const GET_RANDOM_ACCOUNTS_SUCCESS = "GET_RANDOM_ACCOUNTS_SUCCESS"
const GET_RANDOM_ACCOUNTS_FAIL = "GET_RANDOM_ACCOUNTS_FAIL"

export const getRandomAccounts = () => {
    return async dispatch => {
        dispatch(getRandomAccountsStart())
        try {
            const response = await Axios.get("https://randomuser.me/api/?results=5")
            const data = await response.data.results
            const username = []
            const name = []
            await console.log(data)
            for (let key in data) {
                username.push(data[key].login.username)
            }
            for (let key in data) {
                name.push(data[key].name.first)
            }
            dispatch(getRandomAccountsSuccess(username))
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

export const getRandomAccountsSuccess = (username) => {
    return {
        type: GET_RANDOM_ACCOUNTS_SUCCESS,
        username,
    }
}

export const getRandomAccountsFail = (error) => {
    return{
        type: GET_RANDOM_ACCOUNTS_FAIL,
        error: error
    }
}



export {
    GET_RANDOM_ACCOUNTS_START,
    GET_RANDOM_ACCOUNTS_SUCCESS,
    GET_RANDOM_ACCOUNTS_FAIL
}