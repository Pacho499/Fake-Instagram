import Axios from "axios"
const SIGN_UP_START = "SIGN_UP_START"
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
const SIGN_UP_FAIL = "SIGN_UP_FAIL"
const LOG_IN_START = "LOG_IN_START"
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
const LOG_IN_FAIL = "LOG_IN_FAIL"


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
            console.log(response.data)
            dispatch(signUpSuccess(response.data,name,userName))
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

export const signUpSuccess = (userData,name,username) => {
    return {
        type:SIGN_UP_SUCCESS,
        email:userData.email,
        token:userData.idToken,
        localId:userData.localId,
        name,
        username,
    }
}

export const signUpFail = (error) => {
    return{
        type:SIGN_UP_FAIL,
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
            console.log(response.data)
            dispatch(logInSuccess(response.data))
        } catch (error) {
            console.log(error)
            dispatch(logInFail(error))
        }
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

export{
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL
}