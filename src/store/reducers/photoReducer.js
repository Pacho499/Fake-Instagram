import * as actionTypes from "../actions/handlePhoto"

const initialState = {
    loading:false,
    error:false,
    photosData:[]    
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
        default :
            return state
    }
}

export default reducer