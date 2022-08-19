import SingleHomePost from "./SingleHomePost"
import { useSelector } from "react-redux"
const HomePosts = () => {

    const accountsData = useSelector(state => state.accountsReducer.accountsData)
    const immage = useSelector(state => state.photoReducer.photosData)
    
    console.log(immage)
    const renderRandomImmage = () => {
        return immage.map(img => {
            return(
                <img height="550px" width="400px" src={img.urls.regular} alt="" />
            )
        }) 
    }
    const renderRandomAccounts = () => {
        return accountsData.map((data,index) => {
            return(
            <SingleHomePost 
            username={data.login.username}
            key={index}
            name={data.name.first}
            profilePhoto={data.picture.thumbnail}
            postPhoto={data.picture.medium}
            />
               
            )
        })
    }
    
    return(
        <div>
            {renderRandomAccounts()}
            {renderRandomImmage()}
        </div>
    )
} 
export default HomePosts