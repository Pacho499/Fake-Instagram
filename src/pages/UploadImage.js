import Header from "../components/Header"
import "../style/UploadImage.scss"
import { useState, useEffect } from "react" 
import { storage } from '../firebase'
import { getStorage, ref , uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { getPhoto, renderPhoto, uploadPhoto } from "../store/actions/handlePhoto"
const UploadImmage = () => {

    const localId = useSelector(state => state.authReducer.localId)
    const userPhotoList = useSelector(state => state.photoReducer.userPhotoList)
    const [imageUpload, setImmageUpload] = useState(null)
    const dispatch = useDispatch()

    const upload = async () => {
        await dispatch(getPhoto(localId))
        await dispatch(uploadPhoto(storage,imageUpload,localId,userPhotoList))
    }
    
    

    const renderPhoto = () => {
        console.log(userPhotoList)
        userPhotoList.map((url,index) => {
            console.log(url)
            return(
                <img key={index} src={url} alt="" />
            )
        })
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
            <div className="images">
                {userPhotoList.map((url,index) => {
            return(
                <img width="50px" key={index} src={url} alt="" />
            )
        })}
            </div>
            
        </div>
    )
}

export default UploadImmage