import {useFormik} from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import BreadCrumb from "../breadcrumb";
import ProfileCard from '../profile/profileCard';

const EditReviewDetail = ({type}) => {

    const [id,setID] = useState('ID89');

    const formik = useFormik({
        initialValues:{
            customerId:'',
            workId:'',
            //phone:'',
            rating:'',
            description:''
        },validationSchema: Yup.object({
            customerId: Yup.string()
                .required('Please enter the Customer ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
            workId: Yup.string()
                .required('Please enter the Work ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
            rating: Yup.number()
                .required('Please select the rating')

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


    return ( 
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
                                                            <label htmlFor="workId">Work ID</label>
                                                            <input type="text" className="form-control" value={formik.values.workId} id="workId" placeholder="Work ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                            { formik.touched.workId && formik.errors.workId ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="customerId">Customer ID</label>
                                                            <input type="text" className="form-control" id="customer ID" value={formik.values.customerId} placeholder="CustomerId" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                            {formik.touched.customerId && formik.errors.customerId ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.nic}</small>: null}
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label htmlFor="email">Email address</label>
                                                            <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                            {formik.touched.email && formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                                                        </div> */}
                                                        {/* <div className="form-group">
                                                            <label htmlFor="phone">Phone Number</label>
                                                            <input type="tel" className="form-control" value={formik.values.phone} id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                            {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                        </div> */}
                                                        {/* <div className="form-group">
                                                            <label htmlFor="address">Worker ID</label>
                                                            <input type="text" className="form-control" value={formik.values.worker} id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                            { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                                        </div> */}
                                                        <div className="form-group">
                                                            <label htmlFor="rating">Rating</label>
                                                            <input type="number" className="form-control" max="5" min="1" id="rating" value={formik.values.rating} placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                            {formik.touched.rating && formik.errors.rating ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.nic}</small>: null}
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



                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
 
export default EditReviewDetail;