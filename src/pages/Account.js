import me from "../images/me.jpg"
import Header from "../components/Header"
import "../style/Account.scss"
import { useEffect } from "react"
import {getMainAccountData} from "../store/actions/handleMainAccount"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
const Account = () => {


    const dispatch = useDispatch()
    const userName = useSelector(state => state.accountsReducer.userName)
    const realName = useSelector(state => state.accountsReducer.realName)
    const localId = useSelector(state => state.authReducer.localId)
    const bio = useSelector(state => state.mainAccountReducer.bio)
    useEffect(() => {
        dispatch(getMainAccountData(localId))
    })

    return(
        <div>
            <Header/>
            <div className="bioContainer">
                <div className="profilePhoto">
                    <img width="150px" height="150px" src={me} alt="" />
                </div>
                <div className="userDataContainer">
                    <div className="userName">
                        <h1>{userName}</h1>
                        <Link to={`/${userName}/settings`}>
                            <button>Modifica profilo</button>
                        </Link>
                        
                    </div>
                    <div className="numbers">
                        <p>Post: <span>10</span></p>
                        <p><span>297</span> follower</p>
                        <p><span>131</span> profili seguiti</p>
                    </div>
                    <div className="mainBio">
                        <h2>{realName}</h2>
                        <p>{bio}</p>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Account