import { useEffect , useState } from 'react';

import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';
import PaginationBar from '../../pagination';
import NotificationBar from '../../notification/notificationBar';


const NewWorkRequest = () => {    

    const [content,setContent] = useState([]);
    const [id,setID] = useState('');
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState(1);
    const limit = 10;


    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/newRequestCount`)
            .then(res => res.json())
            .then(data => {
                setOffSet(data/limit);              
            })
            .catch(err => console.log(err));

            
        
    },[]);

    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/newRequests?pages=${page}`)
            .then(res => res.json())
            .then(data => {
                setContent(data);               
            })
            .catch(err => console.log(err));
        
    },[page]);


    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="New Request" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    
                                    {/*<!-- [ view-table ] start -->*/}
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Search Work ID</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                            
                                                <SearchBar placeholder="Enter work ID ..." />
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="container">
                                                        <div className="justify-content-center" >
                                                            <NotificationBar
                                                                title = "This is a xample title"
                                                                time = "21 July 12:56"
                                                                description = "This is a xample description. This is a xample description. This is a xample description. This is a xample description"
                                                                viewURL = "#"
                                                                delURL = "#"
                                                                id = "ID001"
                                                            /> 

                                                            {content.map((e)=>{

                                                            })}

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
                        <PaginationBar setPage={setPage} page={page} offSet={offSet}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default NewWorkRequest;