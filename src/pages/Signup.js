import { useState } from "react"
import "../style/SignUp.scss"
import logo from "../images/instagram-logo.png"
import MyInput from "../components/MyInput"
import MyLabel from "../components/MyLabel"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import {auth} from "../store/actions/handleAuth"
const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [userName,setUserName] = useState("")

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

    const dispatch = useDispatch()

    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(auth(email,password,name,userName));
    }
    



    return(
        
        <div className="container">
            <div className="main">
            <img src={logo} height="51px" width="175px" alt="logo" />
            <h4>Iscriviti per vedere le foto e i video dei tuoi amici.</h4>
            <form onSubmit={handleSignUp} action="">
                <MyLabel style={{right:"60px"}} text="Numero di telefono o e-mail"/>
                <MyInput type="text" value={email} handleChange={handleEmail}/>

                <MyLabel style={{right:"85px"}}  text="Nome e cognome"/>
                <MyInput type="text" value={name} handleChange={handleName}/>

                <MyLabel style={{right:"95px"}}  text="Nome utente"/>
                <MyInput type="text" value={userName} handleChange={handleUserName} />

                <MyLabel style={{right:"105px"}}  text="Password"/>
                <MyInput type="Password" value={password} handleChange={handlePassword}/>
            </form>
            <p>Le persone che usano i nostri servizi potrebbero aver caricato le tue informazioni di contatto su Instagram. <span>Scopri di più</span></p>
            <p>Iscrivendoti, accetti le nostre <span>Condizioni.</span>  Scopri in che modo raccogliamo, usiamo e condividiamo i tuoi dati nella nostra <span>Informativa sulla privacy</span>  e in che modo usiamo cookie e tecnologie simili nella nostra <span>Normativa sui cookie.</span> </p>
            <button onClick={handleSignUp} className="signUp">Avanti</button>
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