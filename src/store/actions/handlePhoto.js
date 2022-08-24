import Axios from "axios"
import {ref,uploadBytes, getDownloadURL, listAll} from "firebase/storage"
import {v4} from "uuid"

const GET_RANDOM_PHOTOS_START = "GET_RANDOM_PHOTOS_START"
const GET_RANDOM_PHOTOS_SUCCESS = "GET_RANDOM_PHOTOS_SUCCESS"
const GET_RANDOM_PHOTOS_FAIL = "GET_RANDOM_PHOTOS_FAIL"
const UPLOAD_PHOTO_START = "UPLOAD_PHOTO_START"
const UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS"
const UPLOAD_PHOTO_FAIL = "UPLOAD_PHOTO_FAIL"
const UPLOAD_PROFILE_PHOTO_START = "UPLOAD_PROFILE_PHOTO_START"
const UPLOAD_PROFILE_PHOTO_SUCCESS = "UPLOAD_PROFILE_PHOTO_SUCCESS"
const UPLOAD_PROFILE_PHOTO_FAIL = "UPLOAD_PROFILE_PHOTO_FAIL"
const GET_PHOTO_START = "GET_PHOTO_START"
const GET_PHOTO_SUCCESS = "GET_PHOTO_SUCCESS"
const GET_PHOTO_FAIL = "GET_PHOTO_FAIL"
const GET_PROFILE_PHOTO_START = "GET_PROFILE_PHOTO_START"
const GET_PROFILE_PHOTO_SUCCESS = "GET_PROFILE_PHOTO_SUCCESS"
const GET_PROFILE_PHOTO_FAIL = "GET_PROFILE_PHOTO_FAIL"
const UPLOAD_PHOTO_IN_HOME = "UPLOAD_PHOTO_IN_HOME"

export const getRandomPhotos = () => {
    return async dispatch => {
        dispatch(getRandomPhotosStart())
        try {
            const response = await Axios.get("https://api.unsplash.com/photos/random/?count=20&client_id=Z02HXpRz-v468JfkU4aPfHQPxHvtI0O-cU-g_V6C0B8")
            const data = await response.data
            const photosData = []
            for (let key in data) {
                photosData.push(data[key].urls.regular)
            }
            dispatch(getRandomPhotosSuccess(photosData))
        } catch (error) {
            console.log(error)
            dispatch(getRandomPhotosFail(error))
        }
    }
    
}

export const getRandomPhotosStart = () => {
    return{
        type: GET_RANDOM_PHOTOS_START
    }
}

export const getRandomPhotosSuccess = (photosData) => {
    return {
        type: GET_RANDOM_PHOTOS_SUCCESS,
        photosData,
    }
}

export const getRandomPhotosFail = (error) => {
    return{
        type: GET_RANDOM_PHOTOS_FAIL,
        error: error
    }
}

export const uploadPhoto = (storage,imageUpload,localId,userPhotoList) => {
    return async dispatch => {
        dispatch(uploadPhotoStart())
        try {
            const imageRef = ref(storage, `images/${localId}/${imageUpload.name + v4()}`)
            const upload = await uploadBytes(imageRef,imageUpload)
            const url = await getDownloadURL(imageRef)
            const response = await Axios.put(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/photo.json`,
            [...userPhotoList,url]
            )
            dispatch(uploadPhotoSuccess(url))
            dispatch(uploadPhotoInHome(url))
        } catch (error) {
            console.log(error)
            dispatch(uploadPhotoFail(error))
        }
    }
    
}

export const uploadPhotoStart = () => {
    return{
        type: UPLOAD_PHOTO_START
    }
}

export const uploadPhotoSuccess = (url) => {
    return {
        type: UPLOAD_PHOTO_SUCCESS,
        url:url
    }
}

export const uploadPhotoInHome = (url) => {
    return{
        type: UPLOAD_PHOTO_IN_HOME,
        url:url
    }
}

export const uploadPhotoFail = (error) => {
    return{
        type: UPLOAD_PHOTO_FAIL,
        error: error
    }
}
export const uploadProfilePhoto = (storage,imageUpload,localId) => {
    return async dispatch => {
        dispatch(uploadProfilePhotoStart())
        try {
            const imageRef = ref(storage, `images/${localId}/${imageUpload.name + v4()}`)
            const upload = await uploadBytes(imageRef,imageUpload)
            const url = await getDownloadURL(imageRef)
            const response = await Axios.put(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/profilePhoto.json`,
            [url]
            )
            dispatch(uploadProfilePhotoSuccess(url))
        } catch (error) {
            console.log(error)
            dispatch(uploadProfilePhotoFail(error))
        }
    }
    
}

export const uploadProfilePhotoStart = () => {
    return{
        type: UPLOAD_PROFILE_PHOTO_START
    }
}

export const uploadProfilePhotoSuccess = (profilePhoto) => {
    return {
        type: UPLOAD_PROFILE_PHOTO_SUCCESS,
        profilePhoto:profilePhoto
    }
}

export const uploadProfilePhotoFail = (error) => {
    return{
        type: UPLOAD_PROFILE_PHOTO_FAIL,
        error: error
    }
}

export const getProfilePhoto = () => {
    return async dispatch => {
        dispatch(getProfilePhotoStart())
        const localId = localStorage.getItem("userId")
        try {
            const response = await Axios.get(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/profilePhoto.json`)
            const data = response.data
            dispatch(getProfilePhotoSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(getProfilePhotoFail(error))
        }
    }
    
}

export const getProfilePhotoStart = () => {
    return{
        type: GET_PROFILE_PHOTO_START
    }
}

export const getProfilePhotoSuccess = (profilePhoto) => {
    return {
        type: GET_PROFILE_PHOTO_SUCCESS,
        profilePhoto,
    }
}

export const getProfilePhotoFail = (error) => {
    return{
        type: GET_PROFILE_PHOTO_FAIL,
        error: error
    }
}
export const getPhoto = () => {
    return async dispatch => {
        dispatch(getPhotoStart())
        const localId = localStorage.getItem("userId")
        try {
            const response = await Axios.get(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}/photo.json`)
            const data = response.data
            console.log(data)
            if (data === null){
                return
            }else{
                dispatch(getPhotoSuccess(data))
            }
            
        } catch (error) {
            console.log(error)
            dispatch(getPhotoFail(error))
        }
    }
    
}

export const getPhotoStart = () => {
    return{
        type: GET_PHOTO_START
    }
}

export const getPhotoSuccess = (data) => {
    return {
        type: GET_PHOTO_SUCCESS,
        data,
        
        
    }
}

export const getPhotoFail = (error) => {
    return{
        type: GET_PHOTO_FAIL,
        error: error
    }
}



export {
    GET_RANDOM_PHOTOS_START,
    GET_RANDOM_PHOTOS_SUCCESS,
    GET_RANDOM_PHOTOS_FAIL,
    UPLOAD_PHOTO_START,
    UPLOAD_PHOTO_SUCCESS,
    UPLOAD_PHOTO_FAIL,
    UPLOAD_PROFILE_PHOTO_START,
    UPLOAD_PROFILE_PHOTO_SUCCESS,
    UPLOAD_PROFILE_PHOTO_FAIL,
    GET_PHOTO_START,
    GET_PHOTO_SUCCESS,
    GET_PHOTO_FAIL,
    GET_PROFILE_PHOTO_START,
    GET_PROFILE_PHOTO_SUCCESS,
    GET_PROFILE_PHOTO_FAIL,
    UPLOAD_PHOTO_IN_HOME
}