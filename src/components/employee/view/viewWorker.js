
import EmployeeCard from "../employeeCard";
import PaginationBar from '../../pagination';
import SearchBar from '../../searchBar';
import BreadCrumb from '../../breadcrumb';

import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';


function ViewWorker({type}){

    const [content,setContent] = useState([]);
    const [id,setID] = useState('');
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState(1);


    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/viewWorkersCount`)
            .then(res => res.json())
            .then(data => {
                setOffSet(data/3);              
            })
            .catch(err => console.log(err));

            
        
    },[]);

    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/viewWorkers?pages=${page}`)
            .then(res => res.json())
            .then(data => {
                setContent(data);               
            })
            .catch(err => console.log(err));
        
        console.log(page);
        console.log(content)
        console.log(content.length)
    },[page]);

    const initialState = () => {

        fetch(`http://localhost:8000/serviceprovider/viewWorkers`)
            .then(res => res.json())
            .then(data => {
                setContent(data);               
            })
            .catch(err => console.log(err));
    }


    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="View"/>
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <SearchBar  placeholder="Enter worker ID ..." setCardContent={setContent} setId={setID}/>
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
                                        />): null
                                    }

                                   {!content[0] ?
                                       initialState():null
                                   }
                                    
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

export default ViewWorker;