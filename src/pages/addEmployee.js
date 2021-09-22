import AddWorkerForm from '../components/employee/add/addEmployee';


function AddEmployee({type}) {
    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
            <AddWorkerForm type={type}/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default AddEmployee;
  