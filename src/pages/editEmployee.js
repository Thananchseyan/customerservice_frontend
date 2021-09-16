import EditEmployee from "../components/editEmployee/editEmployee";

function EditWorker({type}) {
    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
            <EditEmployee type={type}/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditWorker;
  