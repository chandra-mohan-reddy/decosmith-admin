import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const Blogs = () =>{
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    date: '',
    dec: '',
    quote: '',
    image: null,
  })

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

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prev) => ({
      ...prev,
      dec: data,
    }));
  };


  const handleQuoteChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prev) => ({
      ...prev,
      quote: data, // Handle the second CKEditor
    }));
  };


  const validateForm = () =>{
    const newErrors = {};
    
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.dec) newErrors.dec = 'Description  is required';
    if (!formData.quote) newErrors.quote = 'Quote is required';
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
      title: '',
      name: '',
      data: '',
      dec: '',
      quote: '',
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
                <li className="breadcrumb-item active"> Blogs</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add Blog</h4>
            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                  <input type="file" className="form-control" name="image" id="image" onChange={handleImageChange}  />
                  <label htmlFor="image" className="fw-normal">Blog Image *</label>
                  {
                    imagePreview && (
                      <img src={imagePreview} alt="image" />
                    )
                  }
                  {errors.image && <span>{errors.image}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <input type="text" className="form-control" name="title" id="title" onChange={handleChange}  value={formData.title} />
                  <label htmlFor="title" className="fw-normal">Blog Title *</label>
                  {errors.title && <span>{errors.title}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                  <input type="text" className="form-control" name="name" id="name" onChange={handleChange}  value={formData.name}/>
                  <label htmlFor="name" className="fw-normal">Person Name *</label>
                  {errors.name && <span>{errors.name}</span>}
                  </div>  
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <input type="date" className="form-control" name="date" id="date" onChange={handleChange}  value={formData.date} />
                  <label htmlFor="date" className="fw-normal">Blog Date *</label>
                  {errors.date && <span>{errors.date}</span>}
                  </div>
                </div>
                
                <div className="col-md-6">
                <label htmlFor="dec" className="fw-normal">Blog Description *</label>
                  <div className="form-floating decp">
                  <CKEditor className="form-control" editor={ClassicEditor} onChange={handleEditorChange} name="dec" id="dec"  data={formData.dec} />
                  {errors.dec && <span>{errors.dec}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                <label htmlFor="quote" className="fw-normal">Blog Quote *</label>
                  <div className="form-floating decp">
                  <CKEditor  className="form-control" name="quote" id="quote" editor={ClassicEditor} onChange={handleQuoteChange}  data={formData.quote} />
                  {errors.quote && <span>{errors.quote}</span>}
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
                <h4 className='sect-title mb-0'>Blogs List</h4>
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
export default Blogs