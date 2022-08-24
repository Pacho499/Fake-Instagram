import logo from "../images/instagram-logo.png"
import home from "../images/home.png"
import send from "../images/send.png"
import heart from "../images/heart.png"
import add from "../images/add.png"
import anonimo from "../images/anonimo.webp"
import homeFill from "../images/home-fill.png"
import "../style/Header.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import {useState} from "react"
import { logout } from "../store/actions/handleAuth"
import { useDispatch } from "react-redux"
const Header = ({}) => {

    const dispatch = useDispatch()
    const userName = useSelector(state => state.accountsReducer.userName)
    const profilePhoto = useSelector(state => state.photoReducer.profilePhoto)
    const [viewOptions, setViewOptions] = useState(false)

    const viewControl = () => {
        setViewOptions(!viewOptions)
    }

    const accountLogout = (e) => {
        dispatch(logout())
        setViewOptions(true)
        
    }

    const renderNav = () => {
        return(
            <div className="accountOptions">
                    <Link style={{textDecoration:"none", color:"black"}} to={`../${userName}`}>
                        <p>Account</p>
                    </Link>
                    <Link style={{textDecoration:"none", color:"black"}} to={`../${userName}/settings`}>
                        <p>impostazioni</p>
                    </Link>
                    <Link onClick={accountLogout} style={{textDecoration:"none", color:"black"}} to="/">
                        <p>Esci</p>
                    </Link>
                    
            </div>
        )
        
    }
 
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
                <Link onClick={viewControl} to="/Home">
                 { viewOptions ? <img height="24px" src={home} alt="" />  :
                 <img src={homeFill} alt="" />}  
                </Link>
                <Link to="/Direct">
                    <img height="24px" src={send} alt="" /> 
                </Link>
                <Link to="/newPost">
                    <img height="24px" src={add} alt="" />
                </Link>
                
                
                <img height="24px" src={heart} alt="" />
                { profilePhoto ? 
                    <button onClick={viewControl}><img style={{borderRadius:"20px"}} width="24px" height="24px"src={profilePhoto} alt="" /></button> 
                    : 
                    <button onClick={viewControl}><img style={{borderRadius:"20px"}} width="24px" height="24px"src={anonimo} alt="" /></button> 
                } 
                {viewOptions ? renderNav() : null}
            </div>
        </div>
       
    )
}

export default Header