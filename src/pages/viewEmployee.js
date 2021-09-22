import ViewWorker from "../components/employee/view/viewWorker";

const ViewEmployee = ({type}) => {
    return ( 
        <div>
            <ViewWorker type={type}/>
        </div>
        
     );
}
 
export default ViewEmployee;