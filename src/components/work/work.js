import { Link } from "react-router-dom";

import Card from "../card";
import ProfileCard from "../profile/profileCard"

const WorkProfile = () => {
    return ( 

    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">

                    <div className="main-body">
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            <div className="row">
                                {/*<!-- [ work status ] starts-->*/}           
                                <Card
                                    title='Work Status'
                                    symbol =  {<i className="feather icon-loader text-c-green f-30 m-r-10"></i>}
                                    count = 'pending'
                                />
                                {/*<!-- [ work status ] end-->*/}

                                {/*<!--[ Messages section ] starts-->*/}
                                <Card
                                    title='New Messages'
                                    symbol = {<i class="fas fa-comment-dots text-c-green f-30 m-r-10"></i>}
                                    count = '100'
                                />
                                {/*<!--[ Messages section ] end-->*/}

                                
                                {/*<!--[ Workers detail link section ] starts-->*/}
                                <Card
                                    title='Assigned Workers'
                                    symbol = {<i class="fas fa-users text-c-green f-30 m-r-10"></i>}
                                    count = '100'
                                />
                                {/*<!--[ Workers detail link section ] end-->*/}
                            </div>

                            <div className="row">
                                {/*<!-- [ work info ] starts-->*/}
                                <div className="col-md-12 col-xl-6">
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>work info</h5>
                                            </div>
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Work Id:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        001
                                                    </div>
                                                </div>
                                                <hr/>
                                                
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Ordered Date:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        20/10/2021
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Subject:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        This is a sample describtion about the work.
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Details:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        This is a sample describtion about the work.
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Address:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        Sample Address
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Finish Date:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        ...
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            {/* <div style={{paddingTop:"20px",float:"right"}}>
                                                <button className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                                    Edit 
                                                    <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                                                </button>
                                            </div> */}
                                        
                                        </div>
                                    </div>
                                </div>
                                {/*<!--[ work info ] end-->*/}

                                
                                <div className="col-md-12 col-xl-6">
                                    {/*<!-- [ customer info ] starts-->*/}
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>Customer info</h5>
                                            </div>
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Full Name:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        Thakshayan Thanabalasingam
                                                    </div>
                                                </div>
                                                <hr/>
                                                
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Customer ID:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        001
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Email:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        Thakshayan007@gmail.com
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Address:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        Sample Address
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{paddingTop:"20px",float:"right"}}>
                                                <button className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                                    View 
                                                    &nbsp; <i class="far fa-eye"></i>
                                                </button>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    {/*<!--[ customer info ] end-->*/}
                                    {/*<!-- [ rating card ] starts-->*/} 
                                    <div className="card user-list" >
                                        <div className="card-header" style={{margin:'10px 0px 0px 20px'}}>
                                            <h5>Rating</h5>
                                        </div>
                                        <div className="card-block" style={{padding:'10px 0px 0px 30px'}}>
                                            <div className="row align-items-center justify-content-center m-b-20">
                                                <div className="col-6">
                                                    <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fas fa-star f-10 m-l-10 text-c-yellow"></i></h2>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="d-flex  align-items-center float-right m-0" style={{padding:'10px 30px 0px 30px'}}> 
                                                        <Link to="#" className="btn btn-primary" style={{width:'100px',height:'25px',padding:'0px 0px',background:'#038fcf'}}>
                                                            View
                                                            <i class="far fa-eye" style={{paddingLeft:'10px'}}></i>
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            <br/>
                                        </div>
                                    </div>
                                    {/*<!-- [ rating list ] end-->*/}
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
 
export default WorkProfile;