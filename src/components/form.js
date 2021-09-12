import BreadCrumb from './breadcrumb';
import PasswordChanger from './form/changePassword';
import PhotoUpdate from './form/changePhoto';
import ChangeCard from './form/changeCard';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';

//import { emailValidator, emptyValidator, nicValidator, passwordValidator, phoneValidator } from './formComponents/formValidator';

function AddWorkerForm({type}){

    // const validate = values => {
    //     const errors = {};

    //     errors.name = emptyValidator(values.name,"Please enter a valid Full Name");
    //     errors.phone = phoneValidator(values.phone);
    //     errors.nic = nicValidator(values.nic);
    //     errors.email = emailValidator(values.email);
    //     errors.password = passwordValidator(values.password);
    //     errors.date = emptyValidator(values.date,"Please select a date");
    //     errors.id = emptyValidator(values.id,"Please enter the Worker ID");
    //     errors.confirmPassword = (values.password !== values.confirmPassword)?"Passwords not matching":null;


    //     if (errors.name || errors.phone || errors.nic || errors.email || errors.password || errors.date || errors.id || errors.confirmPassword){
    //         return errors;
    //     }
    //     const error = {};
    //     return error;
    
    // };

    const toggleAddPassword = (e) => {
        if (addPassword == "password"){
            setAddPassword("text");
            setAddClassName('fa fa-eye-slash');
        }else{
            setAddPassword("password");
            setAddClassName('fa fa-eye');
        } 
    };

    const [addPassword,setAddPassword] = useState("password");
    const [addClassName, setAddClassName] = useState("fa fa-eye");
    const [id,setID] = useState('');
    
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
        },validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter the full name'),
            nic: Yup.string()
                .required('Please enter the NIC')
                .matches(/^([0-9]{12})|([0-9]{9}(v|V))$/,"Enter a valid nic"),
            id: Yup.string()
                .required('Please enter the Worker ID'),
            phone: Yup.number()
                .required('Please enter the phone number'),
            date:Yup.date()
                .required("Please select a date"),
            email: Yup.string()
                .email('Invalid email Address')
                .required('Please enter the email address'),
            password:  Yup.string()
                .required('Please enter the password')
                .min(4,"Password should be more than 3 letters")
                .matches(/[A-Z]/,"Password should have a capital letter")
                .matches(/[0-9]/,"Password should have numbers"),
            confirmPassword: Yup.string()
                .required("Please confirm the password")
                .oneOf([Yup.ref('passwordUpdate'),null],"Password must match")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
            const employee = values
            
            console.log(employee)

            fetch('http://localhost:8000/serviceprovider/addEmployee',{
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
                                                                { formik.touched.name && formik.errors.name ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="nic">NIC</label>
                                                                <input type="text" className="form-control" id="nic" value={formik.values.nic} placeholder="Eg: 987654321v" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.nic && formik.errors.nic ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.nic}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email address</label>
                                                                <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.email && formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phone">Phone Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                            </div>


                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        
                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <input type="text" className="form-control" id="id" value={formik.values.id} placeholder="Worker ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.id && formik.errors.id ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.id}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="joinedDate">Joined Date</label>
                                                                <input type='date'  className="form-control" id="date" value={formik.values.date} placeholder="DD/MM/YYYY" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.date && formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="password">Password</label>
                                                                <input type={addPassword} className="form-control" value={formik.values.password} id="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                <i className={addClassName} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={toggleAddPassword}></i>
                                                                {formik.touched.password && formik.errors.password ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.password}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                                <input type={addPassword} className="form-control" id="confirmPassword"  placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                <i className={addClassName} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={toggleAddPassword}></i>
                                                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.confirmPassword}</small>: null}
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
                                <ChangeCard
                                    title ='Change profile'
                                    setID = {setID}
                                    childComponent ={<PhotoUpdate/>}
                                />
                                {/*<!-- [ photo form ] end -->*/}

                                {/*<!-- [ password update form ] start -->*/}
                                <ChangeCard
                                    title ='Change Password'
                                    setID = {setID}
                                    childComponent ={
                                        <PasswordChanger
                                            id={id}
                                        />}
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