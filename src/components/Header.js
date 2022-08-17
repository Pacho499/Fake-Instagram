import logo from "../images/instagram-logo.png"
import home from "../images/home.png"
import send from "../images/send.png"
import heart from "../images/heart.png"
import add from "../images/add.png"
import compass from "../images/compass.png"
import heartFill from "../images/heart-fill.png"
import compassFill from "../images/compass-fill.png"
import sendFill from "../images/send-fill.png"
import addFill from "../images/add-fill.png"

import "../style/Header.scss"
import { Link } from "react-router-dom"
const Header = () => {
    
    return(
        <div className="mainDiv" >
            <div className="logoDiv">
                <img width="103px" src={logo} alt="logo" />
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
                <img height="24px"src={compass} alt="" />
            </div>
        </div>
       
    )
}

export default Header