import FinishCard from '../finishCard';
import Notificator from '../notification/notificator';
import RatingList from "../ratingSection/ratingList";
import ProfileCard from './profileCard';
import PhotoCard from './profilephoto';
import WorkerInfoCard from "./workerInfoCard";

function ProfileContent(){
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
                                <ProfileCard/>
                                {/*<!--[ basic info section ] end-->*/}

                                <div className="col-xl-4">
                                    {/*<!--[ Worker info section ] starts-->*/}
                                    <WorkerInfoCard/>
                                    {/*<!--[ Worker info section ] end-->

                                    <!-- [ rating list ] starts-->*/}
                                    <RatingList/>
                                    {/*<!-- [ rating list ] end-->*/}

                                    {/*<!-- [ finish button ] starts-->*/}
                                    <FinishCard
                                        title='Remove Employee'
                                        icon ={<i class="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}
                                        button = 'Suspend'
                                        buttonClass = 'btn-danger'
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