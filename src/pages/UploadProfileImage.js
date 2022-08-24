import Header from "../components/Header"
import { useState } from "react" 
import { storage } from '../firebase'
import { useDispatch, useSelector } from "react-redux"
import { uploadProfilePhoto } from "../store/actions/handlePhoto"
import Spinner from "../components/Spinner"
import { useNavigate } from "react-router-dom"
const UploadImmage = () => {

    const localId = useSelector(state => state.authReducer.localId)
    const loading = useSelector (state => state.photoReducer.loading)
    const userName = useSelector (state => state.mainAccountReducer.userName)
    const [imageUpload, setImmageUpload] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const upload = async () => {
        await dispatch(uploadProfilePhoto(storage,imageUpload,localId))
        await navigate(`/${userName}`)
    }
    
    

    const choseImage = (e) => {
        setImmageUpload(e.target.files[0])
    }

    
    return(
        <div>
            <Header/>
            <div className="newPostContainer">
                <div >
                    <h1>carica la tua immagine profilo!</h1>
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