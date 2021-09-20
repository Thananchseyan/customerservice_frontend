import {Link} from 'react-router-dom';

function Card({title,symbol,count}){
    return(
        <div className="col-md-12 col-xl-4">
            <div className="card yearly-sales">
                <div className="card-block">
                    <div className="" style={{display:'block',float:'right'}}> 
                        <Link to="" title="Go" aria-label="go to the page">
                            <i className="fas fa-arrow-right"></i>
                        </Link>     
                    </div>
                    <br/>
                    <div className="d-flex justify-content-between" >
                        <div className="d-flex" style={{display:"flex",marginTop:'10px',verticalAlign:'middle'}}>
                            <div className="d-flex" style={{margin:'0px 20px'}}>
                                <h6 className="f-w-300" style={{verticalAlign:'middle',padding:'0px 10px 10px 0px',margin:'auto',float:'left'}}>  
                                    {title} 
                                </h6>
                                &nbsp; {symbol} 
                            </div>
        
                            {/* <h3 className="f-w-300 d-flex align-items-center ">100</h3> */}
                        </div>
                        <div className="justify-content-end" style={{float:'right',marginTop:'20px'}}>
                            <p className="">{count}</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: "7px"}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "100%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Card;