import SingleHomePost from "./SingleHomePost"
import { useSelector } from "react-redux"
const HomePosts = () => {

    const accountsData = useSelector(state => state.accountsReducer.accountsData)
    const immage = useSelector(state => state.photoReducer.photosData)
    
    const renderRandomAccounts = () => {
        return accountsData.map((data,index) => {
            return(
            <SingleHomePost 
            username={data.login.username}
            key={index}
            name={data.name.first}
            profilePhoto={data.picture.thumbnail}
            postPhoto={data.picture.medium}
            immage = {immage[index]}
            />
               
            )
        })
    }
    
    return(
        <div>
            {renderRandomAccounts()}
        </div>
    )
} 
export default HomePosts