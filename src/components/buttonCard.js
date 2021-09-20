const ButtonCard = ({id,method}) => {
    return ( 
        <div className="col-6 col-xl-4" style={{padding:"10px",height:"100%"}}>
    
            <button type="button" className="" title="click to remove" onClick={method} aria-label="click to remove" style={{height:"100%",padding:"5px 5px",width:"100%",borderRadius:"17px"}}>
                {id} <i className="fas fa-user-minus"></i>
            </button>
            
        </div>
     );
}
 
export default ButtonCard;