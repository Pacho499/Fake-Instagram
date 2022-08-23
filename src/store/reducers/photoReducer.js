import * as actionTypes from "../actions/handlePhoto"

const initialState = {
    loading:false,
    error:false,
    photosData:[],
    userPhotoList:[],    
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case(actionTypes).GET_RANDOM_PHOTOS_START:
            return{
                ...state,
                loading:true
            }
        case(actionTypes).GET_RANDOM_PHOTOS_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                photosData:action.photosData
            }
        case(actionTypes).GET_RANDOM_PHOTOS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case(actionTypes).UPLOAD_PHOTO_START:
            return{
                ...state,
                loading:true
            }
        case(actionTypes).UPLOAD_PHOTO_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                userPhotoList:[...state.userPhotoList,action.url]
            }
        case(actionTypes).UPLOAD_PHOTO_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case(actionTypes).GET_PHOTO_START:
            return{
                ...state,
                loading:true
            }
        case(actionTypes).GET_PHOTO_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                userPhotoList:action.data
            }
        case(actionTypes).GET_PHOTO_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        default :
            return state
    }
}

export default reducer