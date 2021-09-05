import { useState } from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from '../breadcrumb';


import {emptyValidator} from './formValidator';
import {phoneValidator} from './formValidator';
import {nicValidator} from './formValidator';
import {passwordValidator} from './formValidator';
import {confirmPasswordValidator} from './formValidator';
import {emailValidator} from './formValidator';

function AddWorkerForm({type}){

    const [temppassword,setTempPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [name,setName] = useState('');
    const [nic,setNIC] = useState('');
    const [id,setId] = useState('');
    const [date,setDate] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [phoneErr,setPhoneError] = useState(false);
    const [nameErr,setNameError] = useState(false);
    const [nicErr,setNICError] = useState(false);
    const [idErr,setIdError] = useState(false);
    const [dateErr,setDateError] = useState(false);
    const [emailErr,setemailError] = useState(false);
    const [passwordErr,setPasswordError] = useState('');
    const [confirmPasswordErr,setConfirmPasswordError] = useState('');

    const [dateType,setDateType] = useState('text');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const employee = {name,nic,id,phone,date,email,type,password}
        console.log(employee);
        
        fetch('http://localhost:3000/serviceprovider/addEmployee',{
            method: 'POST',
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(employee)
        }).then(()=>{
            alert("Successfully submitted");
            console.log(employee);
            console.log(name);
        }).catch((err)=>{
            console.log(err);
        })
    }

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
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Basic Componant</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>{type}</h5>
                                                <hr/>
                                                <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label htmlFor="name">Full Name</label>
                                                                <input type="text" className="form-control" value={name} id="name" placeholder="Full Name" onChange={(e)=>{ emptyValidator(e,setNameError);setName(e.target.value)}} required/>
                                                                { nameErr && <small id="nameError" className="error form-text text-muted error "> Please enter the full name</small>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="nic">NIC</label>
                                                                <input type="text" className="form-control" id="nic" value={nic} placeholder="Eg: 987654321v" onChange={(e)=>{ nicValidator(e,setNICError);setNIC(e.target.value)}} required/>
                                                                { nicErr && <small id="nameError" className="error form-text text-muted error "> Please enter a valid NIC </small>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email address</label>
                                                                <input type="email" className="form-control" value={email} id="email" aria-describedby="emailHelp" onChange={(e)=>{ emailValidator(e,setemailError);setEmail(e.target.value)}} placeholder="Enter email" required/>
                                                                { emailErr && <small id="emailError" className="error form-text text-muted error "> Please enter a valid email address</small>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="name">Phone Number</label>
                                                                <input type="tel" className="form-control" value={phone} pattern="[0-9]{10}" id="phone" placeholder="Phone Number" onChange={(e)=>{phoneValidator(e,setPhoneError);setPhone(e.target.value)}} required/>
                                                                { phoneErr && <small id="phoneError" className="error form-text text-muted"> Please enter a valid phone number </small>}
                                                            </div>


                                                           
                                                    </div>
                                                    <div className="col-md-6">
                                                        
                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <input type="text" className="form-control" id="workerId" onChange={(e)=>{ emptyValidator(e,setIdError,setId);setId(e.target.value)}} placeholder="Worker ID" required/>
                                                                {idErr && <small id="workerIdError" className="error form-text text-muted">Enter a workerId</small>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="joinedDate">Joined Date</label>
                                                                <input type={dateType}  className="form-control" id="joinedDate" onChange={(e)=>{ emptyValidator(e,setDateError,setDate); setDate(e.target.value); setDateType('date')}} placeholder="DD/MM/YYYY" required/>
                                                                {dateErr && <small id="joinedDateError" className="error form-text text-muted">Please select the joining date</small>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="password">Password</label>
                                                                <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>{ passwordValidator(e,setPasswordError,setPassword)}} required/>
                                                                <small id="passwordError" className="error form-text text-muted">{passwordErr}</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" onChange={(e)=>{ confirmPasswordValidator(e,setConfirmPasswordError,password,setTempPassword,setConfirmPasswordError)}} required/>
                                                                <small id="confirmPasswordError" className="error form-text text-muted">{confirmPasswordErr}</small>
                                                            </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                        
                                                </form>

                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWorkerForm;