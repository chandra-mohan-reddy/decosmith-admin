import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState, useRef, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { enviromentUrl } from '../enviroment/enviromentVariable';
import { envImgUrl } from '../enviroment/envImage';

const Products = () => {

  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    breadTitle: '',
    description: '',
    image: null,
  });
  const [product, setProduct] = useState([]);
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
    }))
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Name is required';
    if (!formData.subTitle) newErrors.subTitle = 'Company Name is required';
    if (!formData.breadTitle) newErrors.breadTitle = 'Bread Title is required';
    if (!formData.description) newErrors.description = 'Content is required';
    if (!formData.image) newErrors.image = 'Image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleEditorChange = (event, editor) => {
  //   const data = editor.getData();
  //   setFormData((prev) => ({
  //     ...prev,
  //     description: data,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill out all required fields.', {
        position: "top-right",
      });
      return;
    }

    setFormData({
      title: '',
      subTitle: '',
      altText: '',
      description: '',
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
    const apiUrl = `${enviromentUrl}/product/post.php`;

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



  const GetData = async () => {
    const url = `${enviromentUrl}/product/get.php`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const fetchedData = await response.json();
    const partnerData = fetchedData.response;

    setProduct(partnerData);
  };
  useEffect(() => {
    GetData();
  }, []);

  console.log("product data =========>", product);


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
                    <li className="breadcrumb-item active"> Products</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add Products</h4>
            <form method="post" onSubmit={handleSubmit}>

              <div className="row">
              <div className="col-md-6 mb-3">
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" name="breadTitle" id="breadTitle" onChange={handleChange} value={formData.breadTitle} />
                    <label htmlFor="breadTitle" className="fw-normal">Bread Title *</label>
                    {errors.breadTitle && <span>{errors.breadTitle}</span>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input type="file" className="form-control" name="image" id="image" accept="image/*" ref={fileInputRef} onChange={handleImageChange} />
                    <label htmlFor="image" className="fw-normal">Image *</label>
                    {/* Image Preview */}
                    {imagePreview && (


                      <img src={imagePreview} alt="Selected" />

                    )}
                    {errors.image && <span>{errors.image}</span>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating ">
                    <input type="text" className="form-control" name="title" id=" title" onChange={handleChange} value={formData.title} />
                    <label htmlFor="title" className="fw-normal">Title *</label>
                    {errors.title && <span>{errors.title}</span>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" name="subTitle" id="subTitle" onChange={handleChange} value={formData.subTitle} />
                    <label htmlFor="subTitle" className="fw-normal">Sub Title *</label>
                    {errors.subTitle && <span>{errors.subTitle}</span>}
                  </div>
                </div>
               
               
                <div className="col-md-12 mt-4">
                  <label htmlFor="description" className="fw-normal">Content *</label>
                  <div className="form-floating decp">
                    <textarea className="form-control"  name="description" id="description" onChange={handleChange} value={formData.description} />
                    {errors.description && <span>{errors.description}</span>}
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
                  <th>Bread Title</th>
                  <th>Title</th>
                  <th>Sub Title</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(product) && product.map((item,index) => (
                
                <tr>
                  <td scope="row">
                    {index + 1}
                  </td>
                  <td>
                    {item.bread_title}
                  </td>
                  <td>
                    {item.title}
                  </td>
                  <td>
                    {item.sub_title}
                  </td>
                 
                  <td>
                    {item.description}
                  </td>
                  <td>
                   <img className="adminImage" src={`${envImgUrl}/uploads/products/${item.image}`} alt="image" />
                  </td>
                  <td>
                    <a href="#"><button className='edt-icon'><FaEdit /></button></a>
                    <a href="#"><button className='dlete'><MdDelete /></button></a>
                  </td>

                </tr>
              ))}


            </tbody>

          </table>
        </div>
      </div>

    </div>
    </div >
  )
}
export default Products