import Axios from "axios"
const AUTH_START = "AUTH_START"
const AUTH_SUCCESS = "AUTH_SUCCESS"
const AUTH_FAIL = "AUTH_FAIL"

export const auth = (email,password,name,userName) => {
    
    return async dispatch =>{
        dispatch(authStart())
        try {
            const key = "AIzaSyA4yAH6jdEqymDwGXbDN5z_YxJDmUgpaiA"
            const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
            const response = await Axios.post(URL,{
                email: email,
                password:password,
                returnSecureToken:true,
            })
            dispatch(authSuccess(response.data,name,userName))
        } catch (error) {
            console.log(error)
            dispatch(authFail(error))
        }
    }
    
}


export const authStart = () => {
    return{
        type:AUTH_START
    }
}

export const authSuccess = (userData,name,username) => {
    return {
        type:AUTH_SUCCESS,
        email:userData.email,
        token:userData.idToken,
        localId:userData.localId,
        name,
        username,
    }
}

export const authFail = (error) => {
    return{
        type:AUTH_FAIL,
        error:error
    }
}

export{
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
}