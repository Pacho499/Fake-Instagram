import Header from "../components/Header"
import Spinner from "../components/Spinner"
import "../style/Home.scss"
import PreviewAccount from "../components/PreviewAccount"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandomAccounts } from "../store/actions/handleAccounts"
import { getRandomPhotos } from "../store/actions/handlePhoto"
import HomePosts from "../components/HomePosts"
const Home = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.accountsReducer.loading)

    useEffect(() => {
        dispatch(getRandomAccounts())
        dispatch(getRandomPhotos())
    },[])

    
    

    return(
        <div>
            <Header/>
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