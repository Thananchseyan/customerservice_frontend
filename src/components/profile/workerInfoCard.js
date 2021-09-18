import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const WorkerInfoCard = ({id,edit}) => {

    const [content,setContent] = useState([]);

    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/getWorkerInfo/${id}`)
            .then(res => res.json())
            .then(data => {
                setContent(data)
                console.log(data)
            })
            .catch(err=> console.log);

    },[])



    return (  
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>Worker info</h5>
                    </div>
                    {content[0] ?
                    <div className="" style={{paddingTop:"25px"}}>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Worker ID:
                            </div>
                            <div className="col-6 col-md-6">
                                {content[0].workerId}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Designation:
                            </div>
                            <div className="col-6 col-md-6">
                                {content[0].type}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                phone:
                            </div>
                            <div className="col-6 col-md-6">
                                {content[0].phone}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Joined Date:
                            </div>
                            <div className="col-6 col-md-6">
                                {content[0].date}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Total Works:
                            </div>
                            <div className="col-6 col-md-6">
                                {content[0].works}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Left Date:
                            </div>
                            <div className="col-6 col-md-6">
                                {content[0].leftDate?content[0].leftDate:"..."}
                            </div>
                        </div>
                    </div>
                    :null}

                    {edit ? 
                        <div style={{paddingTop:"20px",float:"right"}}>
                            <Link to={`/edit/workerInfo/${id}`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                Edit 
                                <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                            </Link>
                        </div>
                    :<br/>}
                   
                 </div>
            </div>
        </div>
    );
}
 
export default WorkerInfoCard;