import Header from "../components/Header"
import Spinner from "../components/Spinner"
import "../style/Home.scss"
import PreviewAccount from "../components/PreviewAccount"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMainAccountUserName, getRandomAccounts, getRandomSuggestedAccounts } from "../store/actions/handleAccounts"
import { getRandomPhotos } from "../store/actions/handlePhoto"
import Axios from "axios"
import HomePosts from "../components/HomePosts"
const Home = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.accountsReducer.loading)
    const localId = useSelector(state=> state.authReducer.localId)
    const realName = useSelector(state => state.accountsReducer.realName)
    const userName = useSelector(state => state.accountsReducer.userName)

    //rivedere ma siamo sulla strada giusta
    useEffect(() => {
        dispatch(getRandomAccounts())
        dispatch(getRandomPhotos())
        dispatch(getRandomSuggestedAccounts())
        dispatch(getMainAccountUserName(localId))
    },[])

    return(
        <div>
            <Header/>
            <div className="mainPost">
                <div className="post">
                    {loading ? <Spinner/>  : <HomePosts/> }
                </div>
                <div className="accounts">
                    <PreviewAccount realName={realName} userName={userName}/>
                </div>
            </div>
        </div>
    )
}

export default Home