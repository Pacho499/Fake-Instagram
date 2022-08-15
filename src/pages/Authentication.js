import "../style/Authentication.scss"
import{useState} from 'react'
import logo from "../images/instagram-logo.png"
import background from "../images/Background-login.png"
import MyInput from "../components/MyInput"
import {Link} from "react-router-dom"
const Auth = () => {
    //bisgona animare il login
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }



    return (
        <div className="mainContainer">
            <div className="leftContainer">
                <img className="background" src={background} alt="logo" height="580px" />
                <div className="Slide">
                    
                </div>
                
            </div>
            <div className="rightContainer">
                <div className="form">
                    <img src={logo} alt="" height="51px" width="175px"  />
                    <form action="">
                        <div>
                            <MyInput 
                                text="Numero di telefono,nome utente o e-mail"
                                autoComplete="username" 
                                handleChange={handleEmail} 
                                value={email}
                                type="text"
                                className="emailLabel"
                            />
                        </div>
                        <div>
                            <MyInput
                                text="password"
                                autoComplete="password"
                                handleChange={handlePassword}
                                value={password}
                                type="password"
                                className="passwordLabel"
                            />
                            <button className="changeInputType">Mostra</button>
                        </div>
                        <button className="logIn">Accedi</button>
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

export default Auth