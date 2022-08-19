import me from "../images/me.jpg"
import heart from "../images/heart.png"
import send from "../images/send.png"
import comment from "../images/comment.png"
import save from "../images/save.png"
import "../style/HomePost.scss"
import { useSelector } from "react-redux"
const SingleHomePost = ({username,name,profilePhoto,img}) => {

    

    return(
        <div className="mainContainerHome">
            <div className="user">
                <img style={{borderRadius:"50px"}} height="40px" width="40px" src={profilePhoto} alt=""/>
                <p>{username}</p>
            </div>
            <div>
                <img width="400px" src={me} alt="" />
            </div>
            <div>
                <div className="icon">
                    <img height="24px" src={heart} alt="" />
                    <img height= "24px" src={comment} alt="" />
                    <img height="24px" src={send} alt="" />
                    <img id="save" height="24px" src={save} alt="" />
                </div>
                <div className="like">
                    <img width="20px" height="20px" src={me} alt="" />
                    <p>piace a {name} e altri</p>
                </div>
                
                <h4 className="description">
                    <p>{username}</p> descrizione foto
                </h4>
            </div>
        </div>
    )
}

export default SingleHomePost