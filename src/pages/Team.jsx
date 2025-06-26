import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { enviromentUrl } from "../enviroment/enviromentVariable";

const Team = () => {
  const [formData, setFormData] = useState({
    name: '',
    desig:'',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a FileReader to convert the image to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result, // Base64 image data
        });
        setImagePreview(reader.result); // Preview the base64 image
      };
      reader.readAsDataURL(file); // Read the file as base64
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.image) newErrors.image = 'Image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill out all required fields.', {
        position: "top-right",
      });
      return;
    }

    setFormData({
      name: '',
      desig:'',
      image: null,
    });

    console.log('Form Data Submitted', formData);

    toast.success('Your form has been successfully submitted!', {
      position: "top-right",
    });

    setImagePreview(null); // Clear image preview
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input field
    }

    // Define your API URL (make sure it's correct)

    const apiUrl = `${enviromentUrl}/team/post.php`;
    // Send the data to the server
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify that we're sending JSON
      },
      body: JSON.stringify(formData), // Send the formData as JSON
    })
      .then((response) => response.json()) // Parse the JSON response from the server
      .then((data) => {
        if (data.status) {
          toast.success(data.response, {
            position: "top-right",
          });
        } else {
          toast.error(data.response, {
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        toast.error('There was an error submitting your form. Please try again later.', {
          position: "top-right",
        });
      });
  };

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
                    <li className="breadcrumb-item active"> Team</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add Team</h4>
            <form method="post" onSubmit={handleSubmit}>

              <div className="row">

              
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={formData.title} />
                    <label htmlFor="name" className="fw-normal">Full Name *</label>
                    {errors.title && <span>{errors.title}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" name="desig" id="desig" onChange={handleChange} value={formData.desig} />
                    <label htmlFor="desig" className="fw-normal">Desigestion *</label>
                    {errors.name && <span>{errors.name}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input type="file" className="form-control" name="image" id="image" onChange={handleImageChange} />
                    <label htmlFor="image" className="fw-normal"> Image *</label>
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
                    <button className="btn btn-primary" type="submit">Submit</button></div></div>
              </div>
              <ToastContainer />
            </form>
          </div>
          <div className="card mt-4 p-4">
            <div className='row justify-content-between mb-4 align-items-center'>
              <div className="col-md-9">
                <h4 className='sect-title mb-0'>Team List</h4>
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
export default Team