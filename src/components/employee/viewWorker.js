
import {Link} from 'react-router-dom';

import EmployeeCard from "./employeeCard";
import PaginationBar from '../pagination';
import SearchBar from '../searchBar';
import BreadCrumb from '../breadcrumb';


function ViewWorker({type}){

    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="View"/>
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <SearchBar/>
                        {/*<!-- [ search bar ] start -->*/}

                        {/*<!-- [ search bar ] end -->*/}
                        
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    <EmployeeCard type={type}/>
                                    <EmployeeCard type={type}/>
                                    <EmployeeCard type={type}/>
                                    <EmployeeCard type={type}/>
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

export default ViewWorker;