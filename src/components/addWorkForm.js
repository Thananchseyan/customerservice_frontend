import BreadCrumb from './breadcrumb';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';


function AddWorkerForm({type}){

    const [id,setID] = useState('');
    
    const formik = useFormik({
        initialValues:{
            name:'',
            nic:'',
            id:'',
            phone:'',
            address:'',
            // date:'',
            email:'',
            type:'Moderator',
            password:''
        },validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter the full name')
                .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/,"Cannot have special characters and seperated with space"),
            nic: Yup.string()
                .required('Please enter the NIC')
                .matches(/^([0-9]{12})|([0-9]{9}(v|V))$/,"Enter a valid nic"),
            id: Yup.string()
                .required('Please enter the Worker ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
            phone: Yup.number()
                .required('Please enter the phone number'),
            address: Yup.string()
                .required('Please fill the address'),
            // date:Yup.date()
            //     .required("Please select a date"),
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
                .oneOf([Yup.ref('password'),null],"Password must match")
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
                                                                <label htmlFor="phone">Phone Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="address">Address</label>
                                                                <input type="text" className="form-control" value={formik.values.address} id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                                            </div>

                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        
                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <input type="text" className="form-control" id="id" value={formik.values.id} placeholder="Worker ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.id && formik.errors.id ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.id}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email address</label>
                                                                <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.email && formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                                                            </div>
                                                            {/* <div className="form-group">
                                                                <label htmlFor="joinedDate">Joined Date</label>
                                                                <input type='date'  className="form-control" id="date" value={formik.values.date} placeholder="DD/MM/YYYY" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.date && formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                                                            </div> */}
                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary" style={{float:"right"}}>Submit</button>
                                                        
                                            </form>
                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWorkerForm;