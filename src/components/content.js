import {Link} from 'react-router-dom';

import Card from "./card";
import Notificator from './notification/notificator';
import RatingList from "./ratingSection/ratingList";

function Content(){
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
                                {//<!--[ New request section ] start-->
                                }
                                <Card
                                    title ='New Work Request'
                                    symbol ={<i class="fas fa-cart-plus text-c-green f-30 m-r-10"></i>}
                                    count = '0'
                                />
                                {/*<!--[ New request section ] end-->

                                <!--[ On going work section ] starts-->*/}
                                <Card
                                    title ='On-going Works'
                                    symbol = {<i className="feather icon-loader text-c-green f-30 m-r-10"></i>}
                                    count = '10'
                                />
                                {/*<!--[ On going work section ] end-->

                                <!--[ Messages section ] starts-->*/}
                                <Card
                                    title='New Messages'
                                    symbol = {<i class="fas fa-comment-dots text-c-green f-30 m-r-10"></i>}
                                    count = '100'
                                />
                                {/*<!--[ Messages section ] end-->


                                <!--[ Recent Notification ] start-->*/}
                                <Notificator/>
                                {//<!--[ Recent Notification ] end-->
                                
                                //<!-- [ statistics year chart ] start -->
                                }
                                <div className="col-xl-4 col-md-6">
                                    
                                    <div className="card">
                                        <div className="card-block border-bottom">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-auto">
                                                    <i className="feather icon-zap f-30 text-c-green"></i>
                                                </div>
                                                <div className="col">
                                                    <h3 className="f-w-300">235</h3>
                                                    <span className="d-block text-uppercase">TOTAL BRANCHES</span>
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
                                {/*<!-- [ rating list ] starts-->*/}
                                    <RatingList/>    
                                {/*<!-- [ rating list ] end-->*/}
                                </div>
                               {/* <!-- [ statistics year chart ] end -->
                                {<!-- [ Main Content ] end --> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Content;