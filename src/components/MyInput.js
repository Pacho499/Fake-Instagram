const Input = ({handleChange,value,type,autoComplete,className,text}) => {
    return(
        <div>
            <label className={className}>{text}</label>
            <input 
                autoComplete={autoComplete} 
                onChange={handleChange} 
                value={value} 
                type={type}
            />
        </div>
    )
}

export default Input;