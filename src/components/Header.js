import logo from "../images/instagram-logo.png"
import home from "../images/home.png"
import send from "../images/send.png"
import heart from "../images/heart.png"
import add from "../images/add.png"
import compass from "../images/compass.png"
import me from "../images/me.jpg"
import heartFill from "../images/heart-fill.png"
import compassFill from "../images/compass-fill.png"
import sendFill from "../images/send-fill.png"
import addFill from "../images/add-fill.png"
import homeFill from "../images/home-fill.png"
import "../style/Header.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Header = ({}) => {

    const localId = useSelector(state => state.authReducer.localId)

    return(
        <div className="mainDiv" >
            <div className="logoDiv">
                <Link to="/Home">
                    <img width="103px" src={logo} alt="logo" />
                </Link>
                
            </div>
            <div className="inputDiv">
                <input type="text" placeholder="Cerca"/>
            </div>
            <div className="iconsDiv">
                <Link to="/Home">
                 <img height="24px" src={home} alt="" />  
                </Link>
                <Link to="/Direct">
                    <img height="24px" src={send} alt="" />
                </Link>
                <img height="24px" src={add} alt="" />
                <img height="24px" src={compass} alt="" />
                <img height="24px" src={heart} alt="" />
                <Link to={`../account/${localId}`}>
                <img style={{borderRadius:"20px"}} width="24px" height="24px"src={me} alt="" />
                </Link>
                
            </div>
        </div>
       
    )
}

export default Header