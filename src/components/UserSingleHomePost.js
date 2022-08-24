import heart from "../images/heart.png"
import heartFill from "../images/heart-fill.png"
import send from "../images/send.png"
import comment from "../images/comment.png"
import save from "../images/save.png"
import "../style/HomePost.scss"
import { useState } from "react"
import { useSelector } from "react-redux"
import anonimo from "../images/anonimo.webp"
const SingleHomePost = () => {
    
    const [like,setLike] = useState(false)
    const post = useSelector(state => state.photoReducer.userPhotoPost)
    const userName = useSelector ( state => state.mainAccountReducer.userName)
    const profilePhoto = useSelector(state => state.photoReducer.profilePhoto)
    console.log(userName)

    const sendLike = () => {
        setLike(!like)
    }

    const renderProfilePhoto = () =>  {
        if(profilePhoto === null) {
            return(
                <img width="20px" height="20px"src={anonimo}  alt="" /> 
            )
        }else{
            return(
                <img width="20px" height="20px"src={profilePhoto}  alt="" /> 
            )
        }
    }

    return(
        <div className="mainContainerHome">
            <div className="user">
                { profilePhoto ? <img style={{borderRadius:"50px"}} height="40px" width="40px" src={profilePhoto}  alt=""/> : <img style={{borderRadius:"50px"}} height="40px" width="40px" src={anonimo}  alt=""/> }
                <p>{userName}</p>
            </div>
            <div>
                <img height="520px" width="400px" src={post} alt="" />
            </div>
            <div>
                <div className="icon">
                    <button onClick={sendLike}>{like ? <img height="24px" src={heartFill}/>  : <img height="24px" src={heart} alt="like" />}</button>
                    
                    <img height= "24px" src={comment} alt="" />
                    <img height="24px" src={send} alt="" />
                    <img id="save" height="24px" src={save} alt="" />
                </div>
                <div className="like">
                    {like ? renderProfilePhoto() : null}
                    {like ?<p>piace a te </p>  : null }
                </div>
                
                <p className="description">
                    <span>{userName}</span> Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    )
}

export default SingleHomePost