import "../style/LogIn.scss"
import{useState,useEffect} from 'react'
import logo from "../images/instagram-logo.png"
import background from "../images/Background-login.png"
import MyInput from "../components/MyInput"
import MyLabel from "../components/MyLabel"
import {Link, Navigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {logIn} from "../store/actions/handleAuth"
const LogIn = () => {
    //bisgona animare il login
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [view,setView] = useState(true)
    const [canLogIn,setCanLogIn] = useState(false)

    const token = useSelector (state => state.authReducer.token)
    const error = useSelector( state => state.authReducer.error)

    const dispatch = useDispatch()
    useEffect(() => {
        changeLogInColor()
    })

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        if (canLogIn === true){
            dispatch(logIn(email,password))
        }
    }

    const changeInputType = (e) => {
        e.preventDefault()
        setView(!view)
    }

    const changeLogInColor = () => {
        if(email.length > 1 && password.length > 4){
            setCanLogIn(true)
        } else if(email.length < 1 || password.length < 4){
            setCanLogIn(false)
        }
    }

    let shouldRedirect = null
    if(token){
        shouldRedirect = <Navigate to="/Home"/>
    }


    return (
        <div className="mainContainer">
            {shouldRedirect}
            <div className="leftContainer">
                <img className="background" src={background} alt="logo" height="580px" />
                <div className="Slide">
                    
                </div>
                
            </div>
            <div className="rightContainer">
                <div className="form">
                    <img src={logo} alt="" height="51px" width="175px"  />
                    <form onSubmit={handleLogIn} action="">
                        <div>
                            <MyLabel style={{right:"30px"}} text="Numero di telefono,nome utente o e-mail"/>
                            <MyInput autoComplete="username" handleChange={handleEmail} value={email} type="text"/>
                        </div>
                        <div> 
                            <MyLabel style={{right:"105px"}} text="Password"/>
                            <MyInput autoComplete="password" handleChange={handlePassword} value={password} type={view ? "password" : "text"}/>
                            <button  onClick={changeInputType} className="changeInputType">Mostra</button>
                            { error ? <p stlye={{color:"red"}}>E-mail o password errati!</p> : null }
                        </div>
                        <button onClick={handleLogIn} style={canLogIn ? {backgroundColor:"#0095f6"}:{backgroundColor:"#c0dffd" }} className="logIn">Accedi</button>
                    </form>
                </div> 
                <div className="signUp">
                    <p>Non hai un account? 
                        <Link to="/Signup">
                            <button 
                                className="singUpButton">Iscriviti
                            </button>
                        </Link>
                        
                    </p>
                </div> 
            </div>
            
        </div>
    )
}

export default LogIn