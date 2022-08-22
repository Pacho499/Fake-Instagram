const SuggestedAccount = ({profilePhoto, userName}) => {
    return (
        <div style={{display:"flex", alignItems:"center", marginTop:"10px"}}>
            <img style={{borderRadius:"20px", border:"1px solid black", marginRight:"10px"}} height="40px" width="40px" src={profilePhoto} alt="" />
            <p style={{fontWeight:"600"}}>{userName}</p>
        </div>
    )
}

export default SuggestedAccount