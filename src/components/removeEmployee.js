import BreadCrumb from "./breadcrumb";
import ChangeCard from "./form/changeCard";
import FinishCard from "./finishCard";

const RemoveEmployeeCard = ({type}) => {
    return ( 
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type={type} reason="Remove" />
                    {/*<!-- [ breadcrumb ] end -->*/}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/*<!-- [ Main Content ] start -->*/}
                                                              
                            {/*<!-- [ Remove card ] start -->*/}
                            <ChangeCard
                                title = {`Remove ${type}`}
                                childComponent ={
                                     
                                    <FinishCard
                                        title= {`Remove ${type}`}
                                        icon ={<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}
                                        button = 'Suspend'
                                        buttonClass = 'btn-danger'
                                    />
                                }
                            />
                            {/*<!-- [ Remove card ] end -->*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    
}
 
export default RemoveEmployeeCard;