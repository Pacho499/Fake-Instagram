import Header from "../components/Header"
import HomePost from "../components/HomePost"
import "../style/Home.scss"
import PreviewAccount from "../components/PreviewAccount"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandomAccounts } from "../store/actions/handleAccounts"
import Axios from 'axios'
const Home = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandomAccounts())
    },[])

    
    
   

   const username = useSelector(state => state.accountsReducer.username)
   const name = useSelector(state => state.accountsReducer.name)

    const renderRandomAccounts = () => {
        return username.map((username,index) => {
            return(
            <HomePost
               username={username}
               key={index}
            />
               
            )
        })
    }
    return(
        <div>
            <Header/>
            <div className="mainPost">
                <div className="post">
                    {renderRandomAccounts()}
                </div>
                <div className="accounts">
                    <PreviewAccount/>
                </div>
            </div>
        </div>
    )
}

export default Home