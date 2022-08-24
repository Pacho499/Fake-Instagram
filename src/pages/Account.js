import anonimo from "../images/anonimo.webp"
import Header from "../components/Header"
import "../style/Account.scss"
import { useEffect, useState } from "react"
import {getMainAccountData} from "../store/actions/handleMainAccount"
import {getPhoto, getProfilePhoto} from "../store/actions/handlePhoto"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import Spinner from "../components/Spinner"
const Account = () => {


    const dispatch = useDispatch()
    const userName = useSelector(state => state.accountsReducer.userName)
    const realName = useSelector(state => state.accountsReducer.realName)
    const userPhotoList = useSelector(state => state.photoReducer.userPhotoList)
    const profilePhoto = useSelector(state => state.photoReducer.profilePhoto)
    const localId = useSelector(state => state.authReducer.localId)
    const bio = useSelector(state => state.mainAccountReducer.bio)
    useEffect(() => {
        dispatch(getPhoto(localId))
    },[])

    
    const renderPhoto = () => {
        
           userPhotoList.reverse()
           return userPhotoList.map((url,index) => {
               return(
                   <img height="300px" width="300px" key={index} src={url} alt="" />
               )
           })
       
    }

    const renderProfilePhoto = () => {
        if (profilePhoto === null){
            return( <img width="150px" height="150px" src={anonimo} alt="" /> )
        }else{
            return (<img width="150px" height="150px" src={profilePhoto} alt="" />)
        }
    }

    return(
        <div className="accountContainer">
            <Header/>
            <div className="bioContainer">
                <div className="profilePhoto">
                    {renderProfilePhoto()}
                </div>
                <div className="userDataContainer">
                    <div className="userName">
                        <h1>{userName}</h1>
                        <Link to={`/${userName}/settings`}>
                            <button>Modifica profilo</button>
                        </Link>
                        
                    </div>
                    <div className="numbers">
                        <p>Post: <span className="post">{userPhotoList.length}</span></p>
                        <p><span>297</span> follower</p>
                        <p><span>131</span> profili seguiti</p>
                    </div>
                    <div className="mainBio">
                        <h2>{realName}</h2>
                        <p>{bio}</p>
                    </div>
                </div>
                
            </div>
    
            <div className="photoContainer">
                {userPhotoList ? renderPhoto() : null }
            </div>
        </div>
        
    )
}

export default Account