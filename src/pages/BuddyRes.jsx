import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BuddyRes = () =>{

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    location: '',
    country: '',
    date: '',
  });

  const [errors,setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  };


  const validateForm = () =>{
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.number) newErrors.number = 'Number is required';
    if (!formData.location) newErrors.location = 'Location  is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.date) newErrors.date = 'Date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
      }


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!validateForm()) {
      toast.error('Please fill out all required fields.', {
        position: "top-right", // Use string for position
      });
      return;
    }

    setFormData({
      name: '',
      number: '',
      location: '',
      country: '',
      date: '',

    })
    console.log('Form Data Submitted', formData);

    toast.success('Your form has been successfully submitted!', {
      position: "top-right", // Use string for position
    });
  


    // Example: Send the data to a server or perform any action
    // fetch('/api/form', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { 'Content-Type': 'application/json' },
    // });

  }



    return (
        <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active"> Buddy Services</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          </div>
    
          <div className='container'>
              <div className='card p-4'>
                <h4 className='sect-title mb-4'>Add Buddy Services</h4>
                <form onSubmit={handleSubmit}>
    
                  <div className="row">
    
                  <div className="col-md-4">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange}  value={formData.name}  />
                    <label htmlFor="name" className="fw-normal">Name *</label>
                    {errors.name && <span>{errors.name}</span> }
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <input type="number" className="form-control" name="number" id="number" onChange={handleChange}  value={formData.number} />
                    <label htmlFor="number" className="fw-normal">Phone Number *</label>
                    {errors.number && <span>{errors.number}</span> }
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="location" id="location" onChange={handleChange}  value={formData.location} />
                    <label htmlFor="location" className="fw-normal">Location *</label>
                    {errors.location && <span>{errors.location}</span> }
                  </div>
                </div>
                    <div className="col-md-6 mt-4">
                      <div className="form-floating">
                        <select className="form-select" name="country"  id="country" onChange={handleChange}  value={formData.country} >
                          <option value=" ">Select</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                        </select>
                        <label htmlFor="country" className="fw-normal">City *</label>
                        {errors.country && <span>{errors.country}</span> }
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                    <div className="form-floating">
                    <input type="date" className="form-control" name="date" id="date" onChange={handleChange}  value={formData.date}  />
                    <label htmlFor="date" className="fw-normal">Date *</label>
                    {errors.date && <span>{errors.date}</span> }
                  </div>
                    </div>
                    {/* 
        <div className="col-md-4">
        
        <div className="form-floating">
          <input type="text" className="form-control" name="name" placeholder="Builder Name" value="" />
          <label for="project-type" className="fw-normal">Select State*</label>
        </div>
      </div> */}
    
                    <div className="row mt-4">
                      <div className="form-floating">
                        <button className="btn btn-primary" type="submit">Submit</button></div></div>
                  </div>
                  <ToastContainer />
                </form>
              </div>
              <div className="card mt-4 p-4">
                <div className='row justify-content-between mb-4 align-items-center'>
                  <div className="col-md-9">
                    <h4 className='sect-title mb-0'>Buddy Services List</h4>
                  </div>
                  <div className="col-md-3">
                    <input type='text' placeholder='Contry,State,City' className='form-control' />
                  </div>
    
                </div>
                <table id="empoloyees-tblwrapper" className="table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Project Placement</th>
                      <th>Project Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
    
                    <tr>
                      <td scope="row">
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        <a href="#"><button className='edt-icon'><FaEdit /></button></a>
                        <a href="#"><button className='dlete'><MdDelete /></button></a>
                      </td>
    
                    </tr>
                    <tr>
                      <td scope="row">
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        1
                      </td>
                      <td>
                        <a href="#"><button className='edt-icon'><FaEdit /></button></a>
                        <a href="#"><button className='dlete'><MdDelete /></button></a>
                      </td>
    
                    </tr>
    
                  </tbody>
    
                </table>
              </div>
            </div>
    
        </div>
      </div>
    )
}
export default BuddyRes