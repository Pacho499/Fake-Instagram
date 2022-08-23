import me from "../images/me.jpg"
import { useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import {changeMainAccountData} from "../store/actions/handleMainAccount"
import { getMainAccountUserName } from "../store/actions/handleAccounts"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import "../style/AccountSetting.scss"
const AccountSetting = () => {

    const userName = useSelector(state => state.accountsReducer.userName)
    const realName = useSelector(state => state.accountsReducer.realName)
    const localId = useSelector(state => state.authReducer.localId)
    const stateBio = useSelector(state => state.mainAccountReducer.bio)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

   
    
   
    const [inputName,setInputName] = useState(realName)
    const [inputUserName,setInputUserName] = useState(userName)
    const [bio, setBio] = useState(stateBio)

    const handleName = (e) => {
        setInputName(e.target.value)
    }
    const handleUserName = (e) => {
        setInputUserName(e.target.value)
    }
    const handleBio = (e) => {
        setBio(e.target.value)
    }
    const changeData = async (e) => {
        e.preventDefault()
        if (inputName.value === ""){
            setInputName(realName)
        }
        if (inputUserName.trim() === ""){
            setInputUserName(userName)
        }
        console.log(inputName)
        await dispatch(changeMainAccountData(localId,inputName,inputUserName,bio))
        await dispatch(getMainAccountUserName(localId))
        setBio("")
        navigate("/Home")
    }


    return (
        <div>
            <Header/>
            <div className="mainSettingContainer">
                <div className="user">
                    <img height="50px" width="50px" src={me} alt="" />
                    <h1>{userName}</h1>
                </div>
                <form onSubmit={changeData}>
                    <div className="nameContainer">
                        <h1>Nome</h1>
                        <div>
                        <input onChange={handleName} value={inputName} type="text" placeholder={realName}/>
                        <p>
                            Aiuta le persone a scoprire il tuo account usando il 
                            nome che ti rappresenta meglio: il tuo nome e cognome, 
                            un soprannome o il nome dell'azienda.
                        </p>
                        </div>
                    </div>

                    
                    
                    <div className="userNameContainer">
                        <h1>Nome utente</h1>
                        <input onChange={handleUserName} value={inputUserName} type="text" placeholder={userName} />
                    </div>
                    <div className="bioSettingContainer">
                        <h1>Biografia</h1>
                        <textarea value={bio} onChange={handleBio} className="bio" cols="30" rows="10"></textarea>
                    </div>

                    <button onClick={changeData}>invia</button>
                </form>
            </div>
        </div>
    )
}

export default AccountSetting