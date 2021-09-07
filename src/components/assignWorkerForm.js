import { useState } from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from './breadcrumb';
import SearchBar from './searchBar';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import NotificationBar from './notification/notificationBar';
import ChangeCard from './form/changeCard';
import AssignForm from './form/assignWorkerForm';



const AssignWorkerForm = ({type}) => {
    
    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="Assign" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    {/*<!-- [ Assign-table ] end -->*/}
                                    <div class="col-xl-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Assign Workers Details</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                            
                                                <SearchBar placeholder="Enter work ID ..." />
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div class="">
                                                            <NotificationBar/>       
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- [ Assign-table ] end -->*/}
                                    
                                </div>

                                    {/*<!-- [ Add-Worker-Card ] end -->*/}
                                        <ChangeCard
                                            title ='Add Workers'
                                            childComponent = {<AssignForm/>}
                                        />
                                    {/*<!-- [ Add-worker-card ] end -->*/}

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default AssignWorkerForm;