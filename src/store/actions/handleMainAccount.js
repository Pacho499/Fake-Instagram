import Axios from "axios"
const CHANGE_MAIN_ACCOUNT_DATA_START = "CHANGE_MAIN_ACCOUNT_DATA_START"
const CHANGE_MAIN_ACCOUNT_DATA_SUCCESS = "CHANGE_MAIN_ACCOUNT_DATA_SUCCESS"
const CHANGE_MAIN_ACCOUNT_DATA_FAIL = "CHANGE_MAIN_ACCOUNT_DATA_FAIL"
const GET_MAIN_ACCOUNT_DATA_START = "GET_MAIN_ACCOUNT_DATA_START"
const GET_MAIN_ACCOUNT_DATA_SUCCESS = "GET_MAIN_ACCOUNT_DATA_SUCCESS"
const GET_MAIN_ACCOUNT_DATA_FAIL = "GET_MAIN_ACCOUNT_DATA_FAIL"



export const changeMainAccountData = (localId,inputName,inputUserName,bio) => {
    return async dispatch => {
        dispatch(changeMainAccountDataStart())
        try {
            const deleteData = await Axios.delete(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/data.json`)
            const response = await Axios.put(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/data.json`,{
                realName: inputName,
                userName: inputUserName,
                bio:bio
            })
            const data = response.data
            console.log(data)
            

            dispatch(changeMainAccountDataSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(changeMainAccountDataFail(error))
        }
    }
    
}

export const changeMainAccountDataStart = () => {
    return{
        type: CHANGE_MAIN_ACCOUNT_DATA_START
    }
}

export const changeMainAccountDataSuccess = (data) => {
    return {
        type: CHANGE_MAIN_ACCOUNT_DATA_SUCCESS,
        realName:data.realName,
        userName:data.userName,
        bio:data.bio
        
    }
}

export const changeMainAccountDataFail = (error) => {
    return{
        type: CHANGE_MAIN_ACCOUNT_DATA_FAIL,
        error: error
    }
}
export const getMainAccountData = (localId,inputName,inputUserName,bio) => {
    return async dispatch => {
        dispatch(getMainAccountDataStart())
        try {
            const response = await Axios.get(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/data.json`)
            const data = response.data
            dispatch(getMainAccountDataSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(getMainAccountDataFail(error))
        }
    }
    
}

export const getMainAccountDataStart = () => {
    return{
        type: GET_MAIN_ACCOUNT_DATA_START
    }
}

export const getMainAccountDataSuccess = (data) => {
    return {
        type: GET_MAIN_ACCOUNT_DATA_SUCCESS,
        realName:data.realName,
        userName:data.userName,
        bio:data.bio
        
    }
}

export const getMainAccountDataFail = (error) => {
    return{
        type: GET_MAIN_ACCOUNT_DATA_FAIL,
        error: error
    }
}

export{ 
    CHANGE_MAIN_ACCOUNT_DATA_START,
    CHANGE_MAIN_ACCOUNT_DATA_SUCCESS,
    CHANGE_MAIN_ACCOUNT_DATA_FAIL,
    GET_MAIN_ACCOUNT_DATA_START,
    GET_MAIN_ACCOUNT_DATA_SUCCESS,
    GET_MAIN_ACCOUNT_DATA_FAIL
}