import heart from "../images/heart.png"
import heartFill from "../images/heart-fill.png"
import send from "../images/send.png"
import comment from "../images/comment.png"
import save from "../images/save.png"
import "../style/HomePost.scss"
import anonimo from "../images/anonimo.webp"
import { useState } from "react"
import { useSelector } from "react-redux"
const SingleHomePost = ({username,name,profilePhoto,immage}) => {
    
    const [like,setLike] = useState(false)
    const userProfilePhoto = useSelector(state => state.photoReducer.profilePhoto)
    const sendLike = () => {
        setLike(!like)
    }
    const renderProfilePhoto = () => {
        if (userProfilePhoto === null){
            return(
                <img height="20px" width="20px" src={anonimo} alt="" />
            )
        }else{
            return(
                <img height="20px" width="20px" src={userProfilePhoto} alt="" />
            )
            
        }
    }

    return(
        <div className="mainContainerHome">
            <div className="user">
                <img style={{borderRadius:"50px"}} height="40px" width="40px" src={profilePhoto} alt=""/>
                <p>{username}</p>
            </div>
            <div>
                <img height="520px" width="400px" src={immage} alt="" />
            </div>
            <div>
                <div className="icon">
                    <button onClick={sendLike}>{like ? <img height="24px" src={heartFill}/>  : <img height="24px" src={heart} alt="like" />}</button>
                    
                    <img height= "24px" src={comment} alt="" />
                    <img height="24px" src={send} alt="" />
                    <img id="save" height="24px" src={save} alt="" />
                </div>
                <div className="like">
                    {like ?  renderProfilePhoto() : <img width="20px" height="20px" src={profilePhoto} alt=""/> }
                    {like ?<p>piace a te, {name} e altri</p>  : <p>piace a {name} e altri</p> }
                </div>
                
                <p className="description">
                    <span>{username}</span> Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    )
}

export default SingleHomePost