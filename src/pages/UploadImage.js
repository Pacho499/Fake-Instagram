import Header from "../components/Header"
import "../style/UploadImage.scss"
import { useState } from "react" 
import { storage } from '../firebase'
import { useDispatch, useSelector } from "react-redux"
import { uploadPhoto } from "../store/actions/handlePhoto"
import Spinner from "../components/Spinner"
import { useNavigate } from "react-router-dom"
const UploadImmage = () => {

    const localId = useSelector(state => state.authReducer.localId)
    const userPhotoList = useSelector(state => state.photoReducer.userPhotoList)
    const loading = useSelector (state => state.photoReducer.loading)
    const error = useSelector (state => state.photoReducer.error)
    const [imageUpload, setImmageUpload] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const upload = async () => {
        await dispatch(uploadPhoto(storage,imageUpload,localId,userPhotoList))
        await navigate("/Home")
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
                <div className="files">
                    <input type="file" onChange={choseImage} />
                    { loading ? <Spinner/>  : <button onClick={upload}>Condividi</button>}
                </div>
            </div>
            
        </div>
    )
}

export default UploadImmage