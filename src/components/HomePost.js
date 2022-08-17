import me from "../images/me.jpg"
import heart from "../images/heart.png"
import send from "../images/send.png"
import comment from "../images/comment.png"
import save from "../images/save.png"
import "../style/HomePost.scss"
const HomePost = () => {
    return(
        <div className="mainContainer">
            <div className="user">
                <img style={{borderRadius:"50px"}} height="60px" width="60px" src={me} alt=""/>
                <p>Nome utente</p>
            </div>
            <div>
                <img width="400px"  src={me} alt="" />
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
                    <p>piace a lorenzo pacho Palumbo e altri</p>
                </div>
                
                <p className="description">nome utente // descrizione foto</p>
            </div>
        </div>
    )
}

export default HomePost