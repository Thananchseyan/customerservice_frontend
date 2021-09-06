import { Link } from "react-router-dom";

const EmployeeCard = ({type}) => {
    return ( 
    <div className="col-12 col-sm-6 col-md-6 col-xl-4">
        <div className="card-container ">
            <div className="card-employee">
                <div className="bg">
                    <svg viewBox="0 0 200 200" xmlns=""> 
                        <path fill="#3f4d67" d="M51.1,-59C62,-51.8,63.5,-31.6,63.2,-14C62.8,3.6,60.6,18.6,53.2,30.1C45.8,41.6,33.4,49.5,20.5,52.6C7.6,55.6,-5.6,53.8,-23.3,52.4C-41,51,-63.1,50.1,-75.5,38.7C-87.9,27.3,-90.6,5.4,-83.8,-11.5C-76.9,-28.4,-60.3,-40.3,-44.8,-46.7C-29.2,-53.1,-14.6,-54,2.8,-57.3C20.1,-60.6,40.3,-66.3,51.1,-59Z" transform="translate(113 100)" /> 
                    </svg>
                    <div className="card-icons">
                        <i className="" title="Currently Active"></i>
                        <Link to="/editWorker"><i className="fa fa-cog" title="Edit" aria-label="edit"></i></Link>
                    </div>
                    <div className="profile-pic">
                        <img className="employee-img" src="assets/images/user/avatar-1.jpg" alt=""/>
                    </div>
                    
                    <p className="p"><b>Thakshayan Thanabalasingam</b></p>
                    
                    <p className="p" style={{marginTop:"10px"}}>|&nbsp; {type} &nbsp; |  </p>

                    <div className="details">
                        <div> <i className="fas fa-user icon"></i> {type} ID : ID001 </div>
                        <div> <i className="fas fa-phone icon" style={{color:"green"}}></i> Tel : 0777777777 </div>
                        <div> <i className="fas fa-envelope-square icon" style={{color:"#800000"}}></i> Email : user@gmail.com </div>
                    </div>
                    <div className="employeeCard-footer">
                    <button className="btn-follow" aria-label="view more">
                        View More &nbsp;
                        <i className="fas fa-arrow-alt-circle-right" aria-hidden="true" ></i>
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default EmployeeCard;