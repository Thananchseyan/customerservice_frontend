import { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router"

const FinishCard = ({title,button,icon,buttonClass,id,finish}) => {

    const [leftDate,setLeftDate] = useState(null);

    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/checkFinish/${id}`)
            .then((res)=>{
                res.json()
            })
            .then(data => {
                setLeftDate(data);
                
            })
            .catch(err=>console.log)

    },[])



    const deleteSubmit = ()=>{
        
            fetch(`http://localhost:8000/serviceprovider/deleteEmployee/${id}`,{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({}),
                
            }).then((res)=>{
                alert("Successfully submitted"); 
                console.log(id)
                if(res.ok){
                    window.location=`/profile/${id}`
                }
            }).catch((err)=>{
                console.log(err);
            })
            
    }

    return ( 
        <div className="card yearly-sales">
            <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                                            
                                            
                <div style={{paddingTop:"20px",float:"right"}}>
                    {leftDate?
                    <button className= {`btn btn-mtd ${buttonClass}`} onClick={deleteSubmit} style={{width:"150px",height:"25px",padding:'0 0'}}> 
                        {button}
                        {icon}      
                    </button>:
                    <button className= {`btn btn-mtd btn-success`} style={{width:"150px",height:"25px",padding:'0 0'}} disabled> 
                        Already Finished &nbsp;
                        <i className="fas fa-check-circle"></i>
                    </button>}
                </div>
            </div>
        </div>
     );
}
 
export default FinishCard;