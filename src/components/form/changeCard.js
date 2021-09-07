import SearchBar from "../searchBar";
import EmployeeCard from "../employee/employeeCard";

const ChangeCard = ({title,childComponent}) => {
    return ( 
        <div className="row"> 
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>{title}</h5>
                    </div>
                    <div className="" style={{marginTop:'20px'}}>
                        <SearchBar placeholder="Enter worker ID ..." />
                    </div>

                    <div className="card-block px-0 py-3">
                        <div className="">
                            <div className="">
                                <div className="row d-flex" >
                                    <EmployeeCard/>
                                                                
                                        <div className="col-10 col-sm-5 col-md-5 col-xl-7" style={{margin:'20px'}}>
                                            {childComponent}
                                        </div>
                                                                       
                                </div>
                            </div>
                        </div>
                    </div>
                                                
                </div>
            </div>
        </div>
     );
}
 
export default ChangeCard;