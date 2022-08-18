import HomePost from "./HomePost"
const HomePosts = ({data}) => {
    const renderRandomAccounts = () => {
        return data.map((data,index) => {
            return(
            <HomePost 
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
        </div>
    )
} 
export default HomePosts