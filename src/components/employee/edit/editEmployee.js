import BreadCrumb from '../../breadcrumb';

import PhotoUpdate from '../../form/changePhoto';
import ChangeCard from '../../form/changeCard';
import ProfileCard from '../../profile/profileCard';


import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function EditEmployee({type}){

    const [id,setID] = useState('ID89');
    const {Id} = useParams()

    useEffect(()=>{
        
        setID(Id)
        console.log(Id);
    },[Id])

    
    const formik = useFormik({
        initialValues:{
            name:'',
            nic:'',
            //phone:'',
            email:'',
            adress:''
        },validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter the full name')
                .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/,"Cannot have special characters and seperated with space"),
            nic: Yup.string()
                .required('Please enter the NIC')
                .matches(/^([0-9]{12})|([0-9]{9}(v|V))$/,"Enter a valid nic"),
            // phone: Yup.number()
            //     .required('Please enter the phone number'),
            email: Yup.string()
                .email('Invalid email Address')
                .required('Please enter the email address'),
            address: Yup.string()
                .required('Please fill the address')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
            const employee = values
            
            console.log(employee)

            fetch('http://localhost:8000/serviceprovider/editBasicInfo/:id',{
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
                        <BreadCrumb type={type} reason="Edit" />
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
                                                                <label htmlFor="address">Address</label>
                                                                <input type="text" className="form-control" value={formik.values.address} id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                                            </div>


                                                        
                                                    </div>
                                                    <div className="col-md-6">    
                                                        <ProfileCard id={id} />
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

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee;