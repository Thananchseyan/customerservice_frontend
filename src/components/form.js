import { useState } from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from './breadcrumb';
import SearchBar from './searchBar';
import EmployeeCard from './employee/employeeCard';

import {useFormik} from 'formik';
import * as Yup from 'yup';


function AddWorkerForm({type}){

    const formik = useFormik({
        initialValues:{
            name:'',
            nic:'',
            id:'',
            phone:'',
            date:'',
            email:'',
            type:'Moderator',
            password:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('required'),
            nic: Yup.string()
                .required('required'),
            id: Yup.string()
                .required('required'),
            phone: Yup.number()
                .required('required'),
            email: Yup.string()
                .email('invalid email Address')
                .required('required'),
            password: Yup.string()
                .required('required')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
            const employee = values
            
            fetch('http://localhost:8000/addEmployee',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(employee)
            }).then(()=>{
                alert("Successfully submitted"); 
            }).catch((err)=>{
                console.log(err);
            })
            }
    })


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
                                                <form onSubmit={formik.handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label htmlFor="name">Full Name</label>
                                                                <input type="text" className="form-control" value={formik.values.name} id="name" placeholder="Full Name" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.name ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="nic">NIC</label>
                                                                <input type="text" className="form-control" id="nic" value={formik.values.nic} placeholder="Eg: 987654321v" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.nic ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.nic}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email address</label>
                                                                <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phone">Phone Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} pattern="[0-9]{10}" id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                            </div>


                                                           
                                                    </div>
                                                    <div className="col-md-6">
                                                        
                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <input type="text" className="form-control" id="id" value={formik.values.id} placeholder="Worker ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.id ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.id}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="joinedDate">Joined Date</label>
                                                                <input type='date'  className="form-control" id="date" value={formik.values.date} placeholder="DD/MM/YYYY" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="password">Password</label>
                                                                <input type="password" className="form-control" value={formik.values.password} id="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.password ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.password}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                                <input type="password" className="form-control" id="confirmPassword"  placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.confirmPassword ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.confirmPassword}</small>: null}
                                                            </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                        
                                                </form>

                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                                {/*<!-- [ photo form ] start -->*/}
                                    <div className="row"> 
                                        <div class="col-xl-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>Change profile</h5>
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
                                                                        <form>
                                                                            <div className="form-group">
                                                                                <label htmlFor="photo">Upload photo</label>
                                                                                <input type="text" className="form-control" value={formik.values.name} id="photo" placeholder="Photo" required/>
                                                                                <small id="photoError" className="error form-text text-muted error "> </small>
                                                                            </div>
                                                                            <button type="submit" className="btn btn-primary">Submit</button>                                                                        
                                                                        </form>
                                                                        <div>
                                                                            <img src="assets/images/user/profile.jpg" alt="Preview Image" style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}/> 
                                                                        </div>
                                                                    </div>
                                                                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                {/*<!-- [ photo form ] end -->*/}

                                {/*<!-- [ password update form ] start -->*/}
                                    <div className="row"> 
                                        <div class="col-xl-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>Change Password</h5>
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
                                                                    <form>
                                                                    <div className="form-group">
                                                                        <label htmlFor="password">Password</label>
                                                                        <input type="password" className="form-control" value={formik.values.password} id="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                        {formik.errors.password ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.password}</small>: null}
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                                                        <input type="password" className="form-control" id="confirmPassword"  placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                        {formik.errors.confirmPassword ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.confirmPassword}</small>: null}
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