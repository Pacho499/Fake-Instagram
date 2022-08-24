import Header from "../components/Header"
import Spinner from "../components/Spinner"
import "../style/Home.scss"
import PreviewAccount from "../components/PreviewAccount"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMainAccountUserName, getRandomAccounts, getRandomSuggestedAccounts } from "../store/actions/handleAccounts"
import { getRandomPhotos } from "../store/actions/handlePhoto"
import HomePosts from "../components/HomePosts"
import UserSingleHomePost from "../components/UserSingleHomePost"
import { getMainAccountData } from "../store/actions/handleMainAccount"
import {getProfilePhoto} from "../store/actions/handlePhoto"
const Home = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.accountsReducer.loading)
    const localId = useSelector(state=> state.authReducer.localId)
    const realName = useSelector(state => state.accountsReducer.realName)
    const userName = useSelector(state => state.accountsReducer.userName)
    const userPhotoPost = useSelector( state => state.photoReducer.userPhotoPost)
    //rivedere ma siamo sulla strada giusta
    useEffect(() => {
         dispatch(getRandomAccounts())
         dispatch(getRandomPhotos())
         dispatch(getRandomSuggestedAccounts())
         dispatch(getMainAccountUserName())
         dispatch(getMainAccountData())
         dispatch(getProfilePhoto())
    },[])

    return(
        <div>
            <Header/>
            <div className="mainPost">
                <div className="post">
                    { userPhotoPost ? <UserSingleHomePost/> : null  }
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