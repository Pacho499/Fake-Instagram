import "../style/spinner.scss"
const Spinner = () => {
    return(
        <div style={{display:"flex", justifyContent:"center"}}>

            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
            
        )
}
export default Spinner