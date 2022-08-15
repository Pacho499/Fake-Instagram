const Input = ({style,handleChange,value,type,autoComplete}) => {
    const inputStyle = {
        padding: "14px 0 2px 8px",
        width: "270px",
        backgroundColor: "#FAFAFA",
        border: "1px solid #DBDBDB",
        borderRadius:"2px",
        ...style,
    }
    return(
        <div>
            <input
                style={inputStyle} 
                autoComplete={autoComplete} 
                onChange={handleChange} 
                value={value} 
                type={type}
            />
        </div>
    )
}

export default Input;