import { useState } from "react"
import "../style/SignUp.scss"
import logo from "../images/instagram-logo.png"
import MyInput from "../components/MyInput"
import { Link } from "react-router-dom"
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

    return(
        
        <div className="container">
            <div className="main">
            <img src={logo} height="51px" width="175px" alt="logo" />
            <h4>Iscriviti per vedere le foto e i video dei tuoi amici.</h4>
            <form action="">
                <MyInput
                    text="Numero di telefono o e-mail"
                    type="text"
                    value={email}
                    onChange={handleEmail}
                    className="emailLabel"
                />
                <MyInput
                    text="Nome e cognome"
                    type="text"
                    value={name}
                    onChange={handleName}
                    className="nameLabel"

                />
                <MyInput
                    text="Nome Utente"
                    type="text"
                    value={userName}
                    onChange={handleUserName}
                    className="userNameLabel"
                />
                <MyInput
                    text="Password"
                    type="Password"
                    value={password}
                    onChange={handlePassword}
                    className="passwordLabel"
                />
            </form>
            <p>Le persone che usano i nostri servizi potrebbero aver caricato le tue informazioni di contatto su Instagram. <span>Scopri di più</span></p>
            <p>Iscrivendoti, accetti le nostre <span>Condizioni.</span>  Scopri in che modo raccogliamo, usiamo e condividiamo i tuoi dati nella nostra <span>Informativa sulla privacy</span>  e in che modo usiamo cookie e tecnologie simili nella nostra <span>Normativa sui cookie.</span> </p>
            <button className="signUp">Avanti</button>
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