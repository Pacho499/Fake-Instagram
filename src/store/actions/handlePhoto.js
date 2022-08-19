import Axios from "axios"


const GET_RANDOM_PHOTOS_START = "GET_RANDOM_PHOTOS_START"
const GET_RANDOM_PHOTOS_SUCCESS = "GET_RANDOM_PHOTOS_SUCCESS"
const GET_RANDOM_PHOTOS_FAIL = "GET_RANDOM_PHOTOS_FAIL"

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



export {
    GET_RANDOM_PHOTOS_START,
    GET_RANDOM_PHOTOS_SUCCESS,
    GET_RANDOM_PHOTOS_FAIL
}