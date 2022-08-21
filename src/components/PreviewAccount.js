import me from "../images/me.jpg"
import "../style/PreviewAccount.scss"
import {useSelector} from "react-redux"
import SuggestedAccount from "./SuggestedAccount"
const PreviewAccount = ({realName, userName})  => {

    const suggestedAccountsData = useSelector(state => state.accountsReducer.suggestedAccountsData)

    const renderRandomAccount = () => {
        return suggestedAccountsData.map((account, index)=> {
            return <SuggestedAccount 
            profilePhoto={account.picture.thumbnail}
            userName={account.login.username}
            key={index}
            />
        }) 
    }
    return(
        <div>
            <div className="mainAccount">
            <img height="50px" width="50px" src={me} alt="" />
                <div className="mainAccountInfo">
                    <h2>{userName}</h2>
                    <p>{realName}</p>
                </div>
            </div>
            <h3>suggerimenti per te</h3>
            <div>
                {renderRandomAccount()}
            </div>
        </div>
    )
}
export default PreviewAccount