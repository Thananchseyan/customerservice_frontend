import NotificationBar from './notificationBar';
import {Link} from "react-router-dom"
import { useEffect,useState } from 'react';

function Notificator({title}){

    const [Notification,setNotification] = useState([]);

    // useEffect(()=>{

    //     fetch(`http://localhost:8000/serviceprovider/getNotification`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setNotification(data);               
    //         })
    //         .catch(err => console.log(err));

    // },[])


    return(
        <div className="col-xl-12 col-md-12">
            <div className="card Notification">
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="">
                        <div className="">
                            <div className="">
                                <NotificationBar
                                    title = "This is a xample title"
                                    time = "21 July 12:56"
                                    description = "This is a xample description. This is a xample description. This is a xample description. This is a xample description"
                                    viewURL = "#"
                                    delURL = "#"
                                    id = "ID001"
                                /> 
                                <NotificationBar
                                    title = "This is a xample title"
                                    time = "21 July 12:56"
                                    description = "This is a xample description. This is a xample description. This is a xample description. This is a xample description"
                                    viewURL = "#"
                                    delURL = "#"
                                    id = "ID001"
                                /> 
                                <NotificationBar
                                    title = "This is a xample title"
                                    time = "21 July 12:56"
                                    description = "This is a xample description. This is a xample description. This is a xample description. This is a xample description"
                                    viewURL = "#"
                                    delURL = "#"
                                    id = "ID001"
                                />       
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{padding:"0px 30px 10px 0px",float:"right"}}>
                    <Link to={`/view`} className="btn btn-mtd btn-primary" style={{width:"150px",height:"25px",padding:'0 0',float:'right'}}> 
                        View More 
                        <i className="far fa-eye" style={{paddingLeft:'10px'}}></i>
                    </Link>
                </div>
                    
            
            </div>
        </div>
    )
}

export default Notificator;