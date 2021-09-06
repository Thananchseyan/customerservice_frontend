import { useState } from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from './breadcrumb';
import SearchBar from './searchBar';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import NotificationBar from './notification/notificationBar';
import EmployeeCard from './employee/employeeCard';



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

                                    {/*<!-- [ Add-Worker-Card ] end -->*/}
                                    <div class="col-xl-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Add Workers</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                            
                                                <SearchBar placeholder="Enter worker ID ..." />
                                            </div>

                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="row d-flex" >
                                                            <EmployeeCard/>
                                                            <div className="col-10 col-sm-5 col-md-5 col-xl-7" style={{margin:'20px'}}>
                                                                <div className="form-group">
                                                                    <label htmlFor="workerId">Work ID</label>
                                                                    <input type="text" className="form-control" id="workerId"  placeholder="Worker ID" required/>
                                                                    <small id="workerIdError" className="error form-text text-muted">Enter a workerId</small>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="workerId">Worker ID</label>
                                                                    <input type="text" className="form-control" id="workerId" placeholder="Worker ID" required/>
                                                                    <small id="workerIdError" className="error form-text text-muted">Enter a workerId</small>
                                                                </div>
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                            </div>       
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {/*<!-- [ Add-worker-card ] end -->*/}



                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default AssignWorkerForm;