import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from 'axios';
const AboutUs = () => {

  const [formData, setFormData] = useState({
    contentType: '',
    heading: '',
    altText: '',
    desc: '',
    image: null,

  })

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

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


  const validateForm = () => {
    const newErrors = {};
    if (!formData.contentType) newErrors.contentType = 'Content Type is required';
    if (!formData.heading) newErrors.heading = 'Heading is required';
    if (!formData.altText) newErrors.altText = 'Alt Text is required';
    if (!formData.desc) newErrors.desc = 'Description is required';
    if (!formData.image) newErrors.image = 'Image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill out all required fields.', {
        position: "top-right", // Use string for position
      });
      return;
    }

    const user = axios.create({
      baseURL: 'http://127.0.0.1:8000/',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    let res = user.post('user', formData);

    console.log(res);

    setFormData({
      contentType: '',
      heading: '',
      altText: '',
      desc: '',
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




  }

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prev) => ({
      ...prev,
      desc: data,
    }));
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
                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                    <li className="breadcrumb-item active"> About Us</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add About Us</h4>
            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <select className="form-select" name="contentType" id="contentType" onChange={handleChange} value={formData.contentType}  >
                      <option value="about">About</option>
                      <option value="mission">Mission</option>
                      <option value="vision">Vision</option>
                      <option value="promise">Promise</option>
                    </select>
                    <label htmlFor="contentType" className="fw-normal">Content Type *</label>
                    {errors.contentType && <span>{errors.contentType}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="heading" placeholder="Builder Name" onChange={handleChange} value={formData.heading} />
                    <label htmlFor="heading" className="fw-normal">Heading *</label>
                    {errors.contentType && <span>{errors.heading}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="file" className="form-control" name="image" placeholder="Builder Name" ref={fileInputRef} onChange={handleImageChange} accept="image" />
                    <label htmlFor="image" className="fw-normal">Image *</label>
                    {imagePreview && (


                      <img src={imagePreview} alt="Selected" />

                    )}
                    {errors.image && <span>{errors.image}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="altText" id="altText" value={formData.altText} onChange={handleChange} />
                    <label htmlFor="altText" className="fw-normal">Alt Text *</label>
                    {errors.altText && <span>{errors.altText}</span>}
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <label htmlFor="desc" className="fw-normal">Description * </label>
                  <div className="form-floating decp" >
                    <CKEditor editor={ClassicEditor} name="desc" id="desc" className="form-control" data={formData.desc} onChange={handleEditorChange} />
                    {errors.desc && <span>{errors.desc}</span>}
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
                    <button className="btn btn-primary" type="submit">Submit</button>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </form>
          </div>
          <div className="card mt-4 p-4">
            <div className='row justify-content-between mb-4 align-items-center'>
              <div className="col-md-9">
                <h4 className='sect-title mb-0'>About Us List</h4>
              </div>
              <div className="col-md-3">
                <input type='text' placeholder='Contry,State,City' className='form-control' />
              </div>

            </div>
            <table id="empoloyees-tblwrapper" className="table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Content Type</th>
                  <th>Heading</th>
                  <th>Image</th>
                  <th>Alt Text</th>
                  <th>Description</th>
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
export default AboutUs