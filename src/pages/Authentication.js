import "../style/Authentication.scss"
import logo from "../images/instagram-logo.png"
import background from "../images/Background-login.png"
import login1 from "../images/login-1.png"
import login2 from "../images/login-2.png"
import login3 from "../images/login-3.png"
import login4 from "../images/login-4.png"
const Auth = () => {
    
    return (
        <div className="mainContainer">
            <div className="leftContainer">
                <img className="background" src={background} alt="" height="580px" />
                <div className="Slide">
                    <img id="login1" className="loginImg" src={login1} alt="" height="500px" />
                    <img id="login2" className="loginImg" src={login2} alt="" height="500px" />
                    <img id="login3" className="loginImg" src={login3} alt="" height="500px" />
                    
                </div>
                
            </div>
            <div className="rightContainer">
                <div className="form">
                    <img src={logo} alt="" height="51px" width="175px"  />
                    <form action="">
                        <div>
                            <label className="emailLabel">Nome utente, e-mail</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label className="passwordLabel">Password</label>
                            <input type="password"/>
                            <button className="changeInputType">Mostra</button>
                        </div>
                        <button className="logIn">Accedi</button>
                    </form>
                </div> 
                <div className="signUp">
                    <p>Non hai un account? <button className="singUpButton">Iscriviti</button></p>
                </div> 
            </div>
            
        </div>
    )
}

export default Auth