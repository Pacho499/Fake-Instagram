const MyLabel = ({text,style}) =>{
    const labelStyle = {
        position:"relative",
        color:"#8E8E8E",
        backgroundColor:"#FAFAFA",
        fontSize:"10px",
        top:"15px",
        ...style,
    }
    return(
        <label style={labelStyle}>{text}</label>
    )
}

export default MyLabel;