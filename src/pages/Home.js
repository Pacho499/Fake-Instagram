import Header from "../components/Header"
import "../style/Home.scss"
import PreviewAccount from "../components/PreviewAccount"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandomAccounts } from "../store/actions/handleAccounts"
import HomePosts from "../components/HomePosts"
const Home = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandomAccounts())
    },[])

    
    const accountsData = useSelector(state => state.accountsReducer.accountsData)

    return(
        <div>
            <Header/>
            <div className="mainPost">
                <div className="post">
                    <HomePosts data={accountsData}/>
                </div>
                <div className="accounts">
                    <PreviewAccount/>
                </div>
            </div>
        </div>
    )
}

export default Home