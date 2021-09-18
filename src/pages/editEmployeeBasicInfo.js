import { Route, Switch } from "react-router";
import EditEmployee from "../components/editEmployee/editEmployee";
import EditEmployeeInfo from "../components/editEmployee/editWorkerInfo";

function EditBasicInfo({type}) {
    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployee type={type}/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditBasicInfo;
  