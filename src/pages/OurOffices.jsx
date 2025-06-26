import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OurOffices = () =>{

  const [formData, setFormData] = useState({
    country: '',
    city: '',
    address: '',
    number: '',
    email: '',
    person: '',
    image: null,
  });

//Image //

  const [imagePreview, setImagePreview] = useState(null);

  const [errors,setErrors] = useState({});

  const fileInputRef = useRef(null);
                                   
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData, image: file,
      });
      setImagePreview(URL.createObjectURL(file));
    }

  };

//inputs//

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev, [name]: value
  }))
};

const validateForm = () =>{
const newErrors = {}

if (!formData.country) newErrors.country = 'Country is required';
if (!formData.city) newErrors.city = 'City is required';
if (!formData.address) newErrors.address = 'Address is required';
if (!formData.number) newErrors.number = 'Number is required';
if (!formData.email) newErrors.email = 'Email is required';
if (!formData.person) newErrors.person = 'Person is required';
if (!formData.image) newErrors.image = 'Image is required';

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
    country: '',
    city: '',
    address: '',
    number: '',
    email: '',
    person: '',
    image: null,

  })
  console.log('Form Data Submitted', formData);

  toast.success('Your form has been successfully submitted!', {
    position: "top-right", // Use string for position
  });
  
  setImagePreview(null); // Clear image preview
  // Optionally reset the file input field as well
  if (fileInputRef.current) {
    fileInputRef.current.value = ''; // Clear the file input field
  }


  // Example: Send the data to a server or perform any action
  // fetch('/api/form', {
  //   method: 'POST',
  //   body: JSON.stringify(formData),
  //   headers: { 'Content-Type': 'application/json' },
  // });

}



    return(
        <div className="main-content">
    <div className="page-content">
      <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active"> Our Offices</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add Our Office</h4>
            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <select className="form-select" name="country"  id="country" onChange={handleChange} value={formData.country}  >
                      <option value=" ">Select</option>
                      <option value="india">India</option>
                      <option value="australia">Australia</option>
                    </select>
                    <label htmlFor="country" className="fw-normal">Office  Country*</label>
                    {errors.country && <span>{errors.country}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" name="city"  id="city" onChange={handleChange} value={formData.city} >
                      <option value=" ">Select</option>
                      <option value="telangana">Telangana</option>
                      <option value="bangalore">Bangalore</option>
                    </select>
                    <label htmlFor="city" className="fw-normal">Office  City* </label>
                    {errors.city && <span>{errors.city}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="address" id="address" onChange={handleChange} value={formData.address}  />
                    <label htmlFor="address" className="fw-normal">Office Address *</label>
                    {errors.address && <span>{errors.address}</span> }
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <input type="number" className="form-control" name="number" id="number" onChange={handleChange} value={formData.number}  />
                    <label htmlFor="number" className="fw-normal">Office Number *</label>
                    {errors.number && <span>{errors.number}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <input type="email" className="form-control" name="email" id="email" onChange={handleChange} value={formData.email} />
                    <label htmlFor="email" className="fw-normal">Office Email *</label>
                    {errors.email && <span>{errors.email}</span>}
                  </div>
                </div>

                <div className="col-md-6 mt-4">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="person" id="person" onChange={handleChange} value={formData.person} />
                    <label htmlFor="person" className="fw-normal">Office Person *</label>
                    {errors.person && <span>{errors.person}</span>}
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                <div className="form-floating">
                    <input type="file" className="form-control" name="image" id="image" onChange={handleImageChange}   />
                    <label htmlFor="image" className="fw-normal">Office Image *</label>
                    {
                      imagePreview && (
                        <img src={imagePreview} alt="image" />
                      )
                    }
                    {errors.image && <span>{errors.image}</span>}
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
                    <button className="btn btn-primary" type='submit'>Submit</button></div></div>
              </div>
              <ToastContainer />
            </form>
          </div>
          <div className="card mt-4 p-4">
            <div className='row justify-content-between mb-4 align-items-center'>
              <div className="col-md-9">
                <h4 className='sect-title mb-0'>Offices List</h4>
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
export default OurOffices