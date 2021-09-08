const FinishCard = ({title,button,icon,buttonClass}) => {
    return ( 
        <div className="card yearly-sales">
            <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                                            
                                            
                <div style={{paddingTop:"20px",float:"right"}}>
                    <button className= {`btn btn-mtd ${buttonClass}`} style={{width:"150px",height:"25px",padding:'0 0'}}> 
                        {button}
                        {icon} 
                        
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default FinishCard;