import Header from "../components/Header"
import Spinner from "../components/Spinner"
import "../style/Home.scss"
import PreviewAccount from "../components/PreviewAccount"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandomAccounts, getRandomSuggestedAccounts } from "../store/actions/handleAccounts"
import { getRandomPhotos } from "../store/actions/handlePhoto"
import Axios from "axios"
import HomePosts from "../components/HomePosts"
const Home = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.accountsReducer.loading)
    const localId = useSelector(state => state.authReducer.localId)
    const realName = useSelector(state => state.authReducer.realName)
    const userName = useSelector(state => state.authReducer.userName)
    const home = true

    //rivedere ma siamo sulla strada giusta
    useEffect(() => {
        dispatch(getRandomAccounts())
        dispatch(getRandomPhotos())
        dispatch(getRandomSuggestedAccounts())
        const saveUserData = async (localId,realName,userName) => {
            try {
                const response = await Axios.put(`https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app/account/${localId}.json`,{
                    realName,
                    userName
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }

        }
        saveUserData(localId,realName,userName)
       
    },[])

    return(
        <div>
            <Header home={home}/>
            <div className="mainPost">
                <div className="post">
                    {loading ? <Spinner/>  : <HomePosts/> }
                </div>
                <div className="accounts">
                    <PreviewAccount/>
                </div>
            </div>
        </div>
    )
}

export default Home