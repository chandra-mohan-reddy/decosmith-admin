import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Testimonials = () => {

  const [formData, setFormData] = useState({
    name: '',
    comName: '',
    altText: '',
    content: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setFormData({
        ...formData,
        image: file, // Save the image file in formData
      });
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.comName) newErrors.comName = 'Company Name is required';
    if (!formData.altText) newErrors.altText = 'Alt Text is required';
    if (!formData.content) newErrors.content = 'Content is required';
    if (!formData.image) newErrors.image = 'Image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prev) => ({
      ...prev,
      content: data,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill out all required fields.', {
        position: "top-right", // Use string for position
      });
      return;
    }

    console.log('Form Data Submitted', formData);

    if (!validateForm()) return;

    toast.success('Your form has been successfully submitted!', {
      position: "top-right", // Use string for position
    });

    setFormData({
      name: '',
      comName: '',
      altText: '',
      content: '',
      image: null,
    })
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
                    <li className="breadcrumb-item active"> Testimonials</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add Testimonials</h4>
            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" name="name" id=" Name" onChange={handleChange} value={formData.name}  />
                    <label htmlFor="name" className="fw-normal">Name *</label>
                    {errors.name && <span>{errors.name}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="comName" id="comName" onChange={handleChange} value={formData.comName}  />
                    <label htmlFor="comName" className="fw-normal">Company Name *</label>
                    {errors.comName && <span>{errors.comName}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="file" className="form-control" name="image" id="image" accept="image/*" ref={fileInputRef} onChange={handleImageChange}  />
                    <label htmlFor="image" className="fw-normal">Image *</label>
                    {/* Image Preview */}
                    {imagePreview && (


                      <img src={imagePreview} alt="Selected" />

                    )}
                    {errors.image && <span>{errors.image}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="altText" id="altText" onChange={handleChange} value={formData.altText}  />
                    <label htmlFor="altText" className="fw-normal">Alt Text *</label>
                    {errors.altText && <span>{errors.altText}</span>}
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                <label htmlFor="content" className="fw-normal">Content *</label>
                  <div className="form-floating decp">
                    <CKEditor className="form-control" editor={ClassicEditor} name="content" id="content" onChange={handleEditorChange} data={formData.content}  />
                    {errors.content && <span>{errors.content}</span>}
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
                    <button type="submit" className="btn btn-primary" >Submit</button>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </form>
          </div>
          <div className="card mt-4 p-4">
            <div className='row justify-content-between mb-4 align-items-center'>
              <div className="col-md-9">
                <h4 className='sect-title mb-0'>Testimonials List</h4>
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
                    {formData.name}
                  </td>
                  <td>
                    {formData.comName}
                  </td>
                  <td>
                    {formData.content}
                  </td>
                  <td>
                    {imagePreview}
                  </td>
                  <td>
                    {formData.altText}
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
export default Testimonials