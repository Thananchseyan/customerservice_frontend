import { useState } from "react";

import PhotoCard from "../profilephoto";
import ProfileCard from "../profileCard";
import WorkerInfoCard from "../workerInfoCard";
import RatingList from "../../rating/ratingSection/ratingList";
import FinishCard from "../../finishCard";
import Notificator from "../../notification/notificator";
import ServiceProviderCard from "./serviceProviderCard";

const SpProfile = () => {

    const id = "ID89";
    
    const [content,setContent] = useState([]);

    return ( 
        <div className="pcoded-main-container main-container">
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
                                <div className="col-sm-12 col-xl-4">
                                {/*<!--[ profile section ] starts-->*/}
                                <PhotoCard/>
                                {/*<!--[ profile section ] end--> */}
                                
                                                                
                                
                                
                                

                                    {/*<!--[ Worker info section ] starts-->*/}
                                    <WorkerInfoCard id={id} edit={true} title="Service Provider Info" />
                                    {/*<!--[ Worker info section ] end-->

                                    <!-- [ rating list ] starts-->*/}
                                    <RatingList id={id} />
                                    {/*<!-- [ rating list ] end-->*/}

                                    {/*<!--[ profile section ] starts-->*/}
                                    <PhotoCard/>
                                    {/*<!--[ profile section ] end-->*/}

                                    {/*<!--[ basic info section ] start-->*/}
                                    <ProfileCard id={id} edit={true} title="Owner Info" />
                                    {/*<!--[ basic info section ] end-->*/}
                                    



                                    {/*<!-- [ finish button ] end-->*/}

                                    {/*<!-- [ finish button ] starts-->*/}
                                    <FinishCard
                                        title='Close the company'
                                        icon ={<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}
                                        button = 'Suspend'
                                        buttonClass = 'btn-danger'
                                        id = {id}
                                    />
                                    {/*<!-- [ finish button ] end-->*/}




                                </div>
                                
                                <div className="col-xl-8">
                                    {/*<!-- [ Services Info ] starts-->*/}
                                        <ServiceProviderCard
                                            title="Service Info"
                                        />

                                    {/*<!-- [ Services Info ] end-->*/}

                                    {/*<!--[ Recent Notification ] start-->*/}
                                    <Notificator title="New Notifications"/>
                                    {/*<!--[ Recent Notification ] end--> */}
                                    
                                    {/*<!--[ Recent Notification ] start-->*/}
                                    <Notificator title="New Messages"/>
                                    {/*<!--[ Recent Notification ] end--> */}
                                </div>
                                {/* <!-- [ Main Content ] end -->  */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default SpProfile;