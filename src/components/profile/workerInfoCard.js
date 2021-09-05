const WorkerInfoCard = () => {
    return (  
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>Worker info</h5>
                    </div>
                    <div className="" style={{paddingTop:"25px"}}>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Worker ID:
                            </div>
                            <div className="col-6 col-md-6">
                                001
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Designation:
                            </div>
                            <div className="col-6 col-md-6">
                                Moderator
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Joined Date:
                            </div>
                            <div className="col-6 col-md-6">
                                20/10/2010
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Total Works:
                            </div>
                            <div className="col-6 col-md-6">
                                200
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Left Date:
                            </div>
                            <div className="col-6 col-md-6">
                                ...
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop:"20px",float:"right"}}>
                        <button className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                            Edit 
                            <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                        </button>
                    </div>
                   
                 </div>
            </div>
        </div>
    );
}
 
export default WorkerInfoCard;