import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import FinishCard from '../finishCard';
import Notificator from '../notification/notificator';
import RatingList from "../ratingSection/ratingList";
import ProfileCard from './profileCard';
import PhotoCard from './profilephoto';
import WorkerInfoCard from "./workerInfoCard";

function ProfileContent(){

    const {id} = useParams();
    
    const [content,setContent] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8000/serviceprovider/getprofile/${id}`)
            .then(res => res.json())
            .then(data => {
                setContent(data);
                console.log(content);
            })
            .catch(err=> console.log);

    },[])

    return(
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                    {//<!-- [ breadcrumb ] start -->

                    //<!-- [ breadcrumb ] end -->
                    }
                    <div className="main-body">
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            <div className="row">

                                {/*<!--[ profile section ] starts-->*/}
                                <PhotoCard/>
                                {/*<!--[ profile section ] end-->

                                /*<!--[ basic info section ] start-->*/}
                                <div className="col-xl-7">
                                    <ProfileCard id={id} edit={true} />
                                </div>
                                
                                {/*<!--[ basic info section ] end-->*/}

                                <div className="col-xl-4">
                                    {/*<!--[ Worker info section ] starts-->*/}
                                    <WorkerInfoCard id={id} edit={true} />
                                    {/*<!--[ Worker info section ] end-->

                                    <!-- [ rating list ] starts-->*/}
                                    <RatingList id={id} />
                                    {/*<!-- [ rating list ] end-->*/}

                                    {/*<!-- [ finish button ] starts-->*/}
                                    <FinishCard
                                        title='Remove Employee'
                                        icon ={<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}
                                        button = 'Suspend'
                                        buttonClass = 'btn-danger'
                                        id = {id}
                                    />
                                    {/*<!-- [ finish button ] end-->*/}

                                </div>
                                

                                {/*<!--[ Recent Notification ] start-->*/}
                                <Notificator/>
                                {/*<!--[ Recent Notification ] end--> */}
                                
                                {//<!-- [ Main Content ] end --> 
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileContent;