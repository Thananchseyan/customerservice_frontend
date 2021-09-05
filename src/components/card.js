import {Link} from 'react-router-dom';

function Card({title,symbol}){
    return(
        <div className="col-md-12 col-xl-4">
            <div className="card yearly-sales">
                <div className="card-block">
                    <div className="" style={{display:'block',float:'right'}}> 
                        <Link to="">
                            <i class="fas fa-arrow-right"></i>
                        </Link>     
                    </div>
                    <br/>
                    <div className="row d-flex align-items-center ">
                        <div className="justify-content-center" style={{display:"flex",marginTop:'10px',verticalAlign:'middle'}}>
                            <h6 className="" style={{verticalAlign:'middle',padding:'0px 20px',margin:'auto',float:'left'}}>  {title} &nbsp; {symbol} </h6>
                            
                            {/* <h3 className="f-w-300 d-flex align-items-center ">100</h3> */}
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