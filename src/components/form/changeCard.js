import SearchBar from "../searchBar";
import EmployeeCard from "../employee/employeeCard";
import { useState } from "react";

const ChangeCard = ({title,childComponent,setID}) => {

    const [cardContent,setCardContent] = useState(null);
    
    return ( 
        <div className="row"> 
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>
                    <div className="" style={{marginTop:'20px'}}>
                        <SearchBar placeholder="Enter worker ID ..." setCardContent={setCardContent} setId={setID}/>
                    </div>
                    {cardContent ?
                    <div className="card-block px-0 py-3">
                        <div className="">
                            <div className="">
                                <div className="row d-flex" >

                                    
                                    {cardContent[0] ? 
                                        <EmployeeCard content={cardContent[0]} type=""/>
                                    : null} 

                                    {cardContent[0] ?                             
                                        <div className="col-10 col-sm-5 col-md-5 col-xl-7" style={{margin:'20px'}}>
                        
                                            {childComponent}
                                        </div>
                                    : null}  
                                   
                                                                       
                                </div>
                            </div>
                        </div>
                    </div> :null}
                                                
                </div>
            </div>
        </div>
     );
}
 
export default ChangeCard;