import Header from "../components/Header"
import "../style/UploadImage.scss"
import { useState } from "react" 
import { storage } from '../firebase'
import { useDispatch, useSelector } from "react-redux"
import { getPhoto, uploadPhoto } from "../store/actions/handlePhoto"
const UploadImmage = () => {

    const localId = useSelector(state => state.authReducer.localId)
    const userPhotoList = useSelector(state => state.photoReducer.userPhotoList)
    const [imageUpload, setImmageUpload] = useState(null)
    const dispatch = useDispatch()

    const upload =  () => {
         dispatch(uploadPhoto(storage,imageUpload,localId,userPhotoList))
    }
    
    

    const choseImage = (e) => {
        setImmageUpload(e.target.files[0])
    }

    
    return(
        <div>
            <Header/>
            <div className="newPostContainer">
                <div >
                    <h1>crea un post</h1>
                </div>
                <div>
                    <input type="file" onChange={choseImage} />
                    <button onClick={upload}>upload</button>
                </div>
            </div>
            
        </div>
    )
}

export default UploadImmage