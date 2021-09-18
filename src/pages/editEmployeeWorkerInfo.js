import EditEmployeeInfo from "../components/editEmployee/editWorkerInfo";

function EditWorkerInfo({type}) {
    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployeeInfo type={type}/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditWorkerInfo;
  