import me from "../images/me.jpg"
import Header from "../components/Header"
import "../style/Account.scss"
import { useSelector } from "react-redux"
const Account = () => {

    const userName = useSelector(state => state.accountsReducer.userName)
    const realName = useSelector(state => state.accountsReducer.realName)

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
                        <button>Modifica profilo</button>
                    </div>
                    <div className="numbers">
                        <p>Post: <span>10</span></p>
                        <p><span>297</span> follower</p>
                        <p><span>131</span> profili seguiti</p>
                    </div>
                    <div className="mainBio">
                        <h2>{realName}</h2>
                        <p>bio</p>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Account