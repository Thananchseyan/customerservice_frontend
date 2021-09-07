import BreadCrumb from './breadcrumb';
import PasswordChanger from './form/changePassword';
import PhotoUpdate from './form/changePhoto';
import ChangeCard from './form/changeCard';
import AddEmployee from '../pages/addEmployee';


function AddWorkerForm({type}){
    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="Add" />
                        {/*<!-- [ breadcrumb ] end -->*/}

                        <div className="main-body">
                            <div className="page-wrapper">

                                {/*<!-- [ Basic info ] start -->*/}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Basic Componant</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>{type}</h5>
                                                <hr/>
                                                <AddEmployee/>
                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                                {/*<!-- [ photo form ] start -->*/}
                                <ChangeCard
                                    title ='Change profile'
                                    childComponent ={<PhotoUpdate/>}
                                />
                                {/*<!-- [ photo form ] end -->*/}

                                {/*<!-- [ password update form ] start -->*/}
                                <ChangeCard
                                    title ='Change Password'
                                    childComponent ={<PasswordChanger/>}
                                />
                                {/*<!-- [ password update form ] end -->*/}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWorkerForm;