import BreadCrumb from './breadcrumb';
import PasswordChanger from './form/changePassword';
import PhotoUpdate from './form/changePhoto';
import ChangeCard from './form/changeCard';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import { emailValidator, emptyValidator, nicValidator, passwordValidator, phoneValidator } from './formComponents/formValidator';

function AddWorkerForm({type}){

    const validate = values => {
        let errors = {};

        errors.name = emptyValidator(values.name,"Please enter a valid Full Name");
        errors.phone = phoneValidator(values.phone);
        errors.nic = nicValidator(values.nic);
        errors.email = emailValidator(values.email);
        errors.password = passwordValidator(values.password);
        errors.date = emptyValidator(values.date,"Please select a date");
        errors.id = emptyValidator(values.id,"Please enter the Worker ID");
        errors.confirmPassword = (values.password !== values.confirmPassword)?"Passwords not matching":null;


        if (errors.name || errors.phone || errors.nic || errors.email || errors.password || errors.date || errors.id || errors.confirmPassword){
            return errors;
        }
        errors = {};
        return errors;
    
    };

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
    })
    
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
        },validate,
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
                                                                <input type="password" className="form-control" value={formik.values.password} id="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.password && formik.errors.password ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.password}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                                <input type="password" className="form-control" id="confirmPassword"  placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
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