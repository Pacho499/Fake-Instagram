import { useState,useEffect } from "react"
import "../style/SignUp.scss"
import logo from "../images/instagram-logo.png"
import MyInput from "../components/MyInput"
import MyLabel from "../components/MyLabel"
import { Link, Navigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {signUp, saveUserData} from "../store/actions/handleAuth"
const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [userName,setUserName] = useState("")
    const [view,setView] = useState(true)
    const [canSignUp, setCanSignUp] = useState(false)

    
    const token = useSelector(state => state.authReducer.token)

    useEffect (() => {
        changeSignInColor()
    })
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const changeInputType = (e) => {
        e.preventDefault()
        setView(!view)
    }

    const changeSignInColor = () => {
        if(email.length > 1 && password.length > 4 && name.length > 1 && userName.length > 1){
            setCanSignUp(true)
        } else if(email.length < 1 || password.length < 4 || name.length < 1 || userName.length < 1){
            setCanSignUp(false)
        }
    }

    const dispatch = useDispatch()
    const handleSignUp = async (e) => {
        if(canSignUp === true) {
            e.preventDefault();
            await dispatch(signUp(email,password,name,userName));
            setEmail("")
            setName("")
            setUserName("")
            setPassword("")
        }else{
            return
        }
       
    }

    let shouldRedirect = null;
    if(token) {
        shouldRedirect = <Navigate to="/Home"/>
    }
    



    return(
        <div className="container">
            {shouldRedirect}
            <div className="main">
            <img src={logo} height="51px" width="175px" alt="logo" />
            <h4>Iscriviti per vedere le foto e i video dei tuoi amici.</h4>
            <form onSubmit={handleSignUp}>
                <MyLabel style={{right:"60px"}} text="Numero di telefono o e-mail"/>
                <MyInput type="text" value={email} handleChange={handleEmail}/>

                <MyLabel style={{right:"85px"}}  text="Nome e cognome"/>
                <MyInput type="text" value={name} handleChange={handleName}/>

                <MyLabel style={{right:"95px"}}  text="Nome utente"/>
                <MyInput type="text" value={userName} handleChange={handleUserName} />

                <MyLabel style={{right:"105px"}}  text="Password"/>
                <MyInput type={view ? "Password" : "text"} value={password} handleChange={handlePassword}/>
                <button onClick={changeInputType} className="changeInputType">Mostra</button>
                <p>Le persone che usano i nostri servizi potrebbero aver caricato le tue informazioni di contatto su Instagram. <span>Scopri di più</span></p>
                <p>Iscrivendoti, accetti le nostre <span>Condizioni.</span>  Scopri in che modo raccogliamo, usiamo e condividiamo i tuoi dati nella nostra <span>Informativa sulla privacy</span>  e in che modo usiamo cookie e tecnologie simili nella nostra <span>Normativa sui cookie.</span> </p>
                <button 
                    style={canSignUp ? {backgroundColor:"#0095f6"}:{backgroundColor:"#c0dffd" }} 
                    onClick={handleSignUp} className="signUp">Avanti</button>
                </form>
            
            </div>
            <div className="logIn">
                <p>
                    Hai un account? 
                    <Link to="/">
                    <button className="logInButton">
                        Accedi
                    </button>
                    </Link>
                    
                </p>
            </div>
            
        </div>
    )
}

export default SignUp