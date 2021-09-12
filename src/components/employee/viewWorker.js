
import {Link} from 'react-router-dom';

import EmployeeCard from "./employeeCard";
import PaginationBar from '../pagination';
import SearchBar from '../searchBar';
import BreadCrumb from '../breadcrumb';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';


function ViewWorker({type}){

    const [content,setContent] = useState([]);

    useEffect(async ()=>{

        await fetch(`http://localhost:8000/serviceprovider/viewWorkers`)
            .then(res => res.json())
            .then(data => {
                setContent(data);
                
            })
            .catch(err => console.log(err));

            

        
    },[]);

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

                                    {
                                        
                                        content ? content.map((e) => <EmployeeCard
                                                content = {e}
                                                key = {e._id}
                                        />):null
                                    }
                                   
                                    
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