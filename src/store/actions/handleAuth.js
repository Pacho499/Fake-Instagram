import Axios from "axios"
const SIGN_UP_START = "SIGN_UP_START"
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
const SIGN_UP_FAIL = "SIGN_UP_FAIL"
const SAVE_USER_DATA_START = "SAVE_USER_DATA_START"
const SAVE_USER_DATA_SUCCESS = "SAVE_USER_DATA_SUCCESS"
const SAVE_USER_DATA_FAIL = "SAVE_USER_DATA_FAIL"
const LOG_IN_START = "LOG_IN_START"
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
const LOG_IN_FAIL = "LOG_IN_FAIL"
const LOGOUT = "LOGOUT"

const key = "AIzaSyA4yAH6jdEqymDwGXbDN5z_YxJDmUgpaiA"
export const signUp = (email,password,name,userName) => {
    
    return async dispatch =>{
        dispatch(signUpStart())
        try {
            const response = await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,{
                email: email,
                password:password,
                returnSecureToken:true,
            })
            const localId = response.data.localId
            const saveUserName = await Axios.put(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/data.json`,{
                realName:name,
                userName:userName
            })
            dispatch(signUpSuccess(response.data))
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('userId', response.data.localId)
        } catch (error) {
            console.log(error)
            dispatch(signUpFail(error))
        }
    }
    
}


export const signUpStart = () => {
    return{
        type:SIGN_UP_START
    }
}

export const signUpSuccess = (userData) => {
    return {
        type:SIGN_UP_SUCCESS,
        email:userData.email,
        token:userData.idToken,
        localId:userData.localId,
    }
}

export const signUpFail = (error) => {
    return{
        type:SIGN_UP_FAIL,
        error:error
    }
}
export const saveUserData = (localId,name,userName) => {
    
    return async dispatch =>{
        dispatch(saveUserDataStart())
        try {
            const response = await Axios.post(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/data.json`,{
                realName:name,
                userName
            })
            console.log(response)
            dispatch(saveUserDataSuccess())
        } catch (error) {
            console.log(error)
            dispatch(saveUserDataFail(error))
        }
    }
    
}


export const saveUserDataStart = () => {
    return{
        type:SAVE_USER_DATA_START
    }
}

export const saveUserDataSuccess = () => {
    return {
        type:SAVE_USER_DATA_SUCCESS,
    }
}

export const saveUserDataFail = (error) => {
    return{
        type:SAVE_USER_DATA_FAIL,
        error:error
    }
}

export const logIn = (email,password) => {
    
    return async dispatch =>{
        dispatch(logInStart())
        try {
            const response = await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,{
                email: email,
                password:password,
                returnSecureToken:true,
            })
            dispatch(logInSuccess(response.data))
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('userId', response.data.localId)
        } catch (error) {
            console.log(error)
            dispatch(logInFail(error))
        }
    }
    
}

export const authCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token){
            return;
        }
        const userId = localStorage.getItem('userId')
        dispatch(logInSuccess({
            idToken: token, 
            localId: userId
        }))
    }
}


export const logInStart = () => {
    return{
        type:LOG_IN_START
    }
}

export const logInSuccess = (userData) => {
    return {
        type:LOG_IN_SUCCESS,
        email:userData.email,
        token:userData.idToken,
        localId:userData.localId,
    }
}

export const logInFail = (error) => {
    return{
        type:LOG_IN_FAIL,
        error:error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    return{
        type: LOGOUT,
    }
}

export{
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    SAVE_USER_DATA_START,
    SAVE_USER_DATA_SUCCESS,
    SAVE_USER_DATA_FAIL,
    LOGOUT
}