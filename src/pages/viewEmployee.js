import ViewWorker from "../components/employee/viewWorker";
import SearchBar from "../components/searchBar";


const ViewEmployee = ({type}) => {
    return ( 
        <div>
            
            <ViewWorker type={type}/>
        </div>
        
     );
}
 
export default ViewEmployee;