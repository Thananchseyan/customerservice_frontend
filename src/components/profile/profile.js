import Card from "../card";
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
                                </div>
                                

                                {/*<!--[ Recent Notification ] start-->*/}
                                <Notificator/>
                                {/*<!--[ Recent Notification ] end--> */}
                                
                                {
                                //<!-- [ statistics year chart ] start -->
                                }
                                {/* <div className="col-xl-4 col-md-6">
                                    <div className="card card-event">
                                        <div className="card-block">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col">
                                                    <h5 className="m-0">Upcoming Event</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                                </div>
                                            </div>
                                            <h2 className="mt-3 f-w-300">45<sub className="text-muted f-14">Competitors</sub></h2>
                                            <h6 className="text-muted mt-4 mb-0">You can participate in event </h6>
                                            <i className="fab fa-angellist text-c-purple f-50"></i>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-block border-bottom">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-auto">
                                                    <i className="feather icon-zap f-30 text-c-green"></i>
                                                </div>
                                                <div className="col">
                                                    <h3 className="f-w-300">235</h3>
                                                    <span className="d-block text-uppercase">TOTAL IDEAS</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-auto">
                                                    <i className="feather icon-map-pin f-30 text-c-blue"></i>
                                                </div>
                                                <div className="col">
                                                    <h3 className="f-w-300">26</h3>
                                                    <span className="d-block text-uppercase">TOTAL LOCATIONS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                               {// <!-- [ statistics year chart ] end -->
                                
                               }
                                


                                {/* <div className="col-xl-8 col-md-12 m-b-30">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link" id="home-tab" data-toggle="tab" to="#" role="tab" aria-controls="home" aria-selected="false">Today</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active show" id="profile-tab" data-toggle="tab" to="#" role="tab" aria-controls="profile" aria-selected="true">This Week</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="contact-tab" data-toggle="tab" to="#" role="tab" aria-controls="contact" aria-selected="false">All</Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            
                                        </div>
                                    </div>
                                </div> */}
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