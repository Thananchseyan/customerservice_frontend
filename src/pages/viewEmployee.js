import ViewWorker from "../components/employee/view/viewWorker";

import {useQuery, gql} from '@apollo/client';

import { useEffect } from "react";


import {VIEW_MODERATORS} from "../GraphQL/Queries"  


const ViewEmployee = ({type}) => {

    const {error,loading, data} = useQuery(VIEW_MODERATORS);

    useEffect(()=>{
        
        console.log(data);
    },[data]);


    return ( 
        <div>
            <ViewWorker type={type}/>
        </div>
        
     );
}
 
export default ViewEmployee;