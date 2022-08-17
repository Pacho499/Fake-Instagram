import Header from "../components/Header"
import HomePost from "../components/HomePost"
import {useState} from "react"
import "../style/Home.scss"
import PreviewAccount from "../components/PreviewAccount"

const Home = () => {

    
    return(
        <div>
            <Header/>
            <div className="mainPost">
                <div className="post">
                    <HomePost/>
                    <HomePost/>
                </div>
                <div className="accounts">
                    <PreviewAccount/>
                </div>
            </div>
        </div>
    )
}

export default Home