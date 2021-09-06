import { useState } from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from './breadcrumb';
import SearchBar from './searchBar';
import PaginationBar from './pagination';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import NotificationBar from './notification/notificationBar';
import EmployeeCard from './employee/employeeCard';



const ViewWorks = () => {
    
    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="view" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    
                                    {/*<!-- [ view-table ] start -->*/}
                                    <div class="col-xl-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Search Work ID</h5>
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
                                    {/*<!-- [ view-table ] end -->*/}





                                </div>
                            </div>
                        </div>
                        <hr/>
                        <PaginationBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ViewWorks;