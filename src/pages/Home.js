import Header from "../components/Header"
import {useState} from "react"

const Home = () => {

    const setIconHome = true
    return(
        <div>
            <Header setIcon={setIconHome}/>
        </div>
    )
}

export default Home