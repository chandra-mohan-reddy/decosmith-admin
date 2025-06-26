import React, { useState, useRef, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {enviromentUrl} from '../enviroment/enviromentVariable.js';
const PostJob = () => {
  const [countries, setCountries] = useState([]);
   const [jobData, setJobData] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    workType: "",
    workMode: "",
    experience: "",
    skills: "",
    country: "",
    state: "",
    city: "",
    summary: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) throw new Error("Error fetching countries");
      const data = await response.json();
      setCountries(
        data.map((country) => ({ name: country.name.common, code: country.cca2 }))
      );
    } catch (error) {
      toast.error("Error fetching countries");
    }
  };

  const fetchStates = async (countryName) => {
    try {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: countryName }),
      });
      const data = await response.json();
      setStates(data?.data?.states || []);
    } catch (error) {
      toast.error("Error fetching states");
    }
  };

  const fetchCities = async (stateName) => {
    try {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: formData.country, state: stateName }),
      });
      const data = await response.json();
      setCities(data?.data || []);
    } catch (error) {
      toast.error("Error fetching cities");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      fetchStates(value);
      setFormData({ ...formData, country: value, state: "", city: "" });
    } else if (name === "state") {
      fetchCities(value);
      setFormData({ ...formData, state: value, city: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
           
      const response = await fetch(`${enviromentUrl}/CareersJob/post.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      toast.success("Job posted successfully!");
      console.log("Submitted Data:", data);

      // Reset form after successful submission
      setFormData({
        title: "",
        workType: "",
        workMode: "",
        experience: "",
        skills: "",
        country: "",
        state: "",
        city: "",
        summury: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting job:", error);
      toast.error("Failed to post job. Please try again.");
    }
  };

    const GetData = async () => {
      const url = `${enviromentUrl}/CareersJob/get.php`;
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      const fetchedData = await response.json();
      const partnerData = fetchedData.response;
  
      setJobData(partnerData);
    };
    useEffect(() => {
      GetData();
    }, []);
  
    console.log("product data =========>", jobData);





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
                    <li className="breadcrumb-item active"> Post a job</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add Job</h4>
            <form onSubmit={handleSubmit} method="post">

              <div className="row">

                <div className="col-md-4">
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" name="title" id="title" onChange={handleChange} value={formData.title} />
                    <label htmlFor="title" className="fw-normal">Title *</label>
                    {errors.title && <span>{errors.title}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <select
                      className="form-control"
                      id="workType"
                      name="workType"
                      value={formData.workType}
                      onChange={handleChange}
                      required
                    >
                      <option value=""> Work Type</option>

                      <option value="Work Form Home">
                        Work Form Home
                      </option>
                      <option value="Work Form Office">
                        Work Form Office
                      </option>
                      <option value="Work Form On Site">
                        Work Form On Site
                      </option>

                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <select
                      className="form-control"
                      id="workMode"
                      name="workMode"
                      value={formData.workMode}
                      onChange={handleChange}
                      required
                    >
                      <option value=""> Work Mode</option>

                      <option value="FulL Time">
                        Full Time
                      </option>
                      <option value="Part Time">
                        Part Time
                      </option>


                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">

                    <select
                      className="form-control"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.code} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">

                    <select
                      className="form-control"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select City</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-floating mt-4">
                    <input type="text" className="form-control" name="experience" id="experience" onChange={handleChange} value={formData.experience} />
                    <label htmlFor="experience" className="fw-normal">Experience *</label>
                    {errors.experience && <span>{errors.experience}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mt-4">
                    <input type="text" className="form-control" name="skills" id="skills" onChange={handleChange} value={formData.skills} />
                    <label htmlFor="skills" className="fw-normal">Skills *</label>
                    {errors.skills && <span>{errors.skills}</span>}
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <label htmlFor="description" className="fw-normal">Job Description *
                  </label>
                  <div className="form-floating decp">
                    <textarea className="form-control" name="description" id="description" onChange={handleChange} />
                    {errors.description && <span>{errors.description}</span>}
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <label htmlFor="summary" className="fw-normal">Job Requirement
                    *</label>
                  <div className="form-floating decp">
                    <textarea className="form-control" name="summary" id="summary" onChange={handleChange} />
                    {errors.summary && <span>{errors.summary}</span>}
                  </div>
                </div>
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
                <h4 className='sect-title mb-0'>Jobs List</h4>
              </div>
              <div className="col-md-3">
                <input type='text' placeholder='Contry,State,City' className='form-control' />
              </div>

            </div>
            <table id="empoloyees-tblwrapper" className="table">
              <thead> 
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Description</th>
                  <th>Expernice</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(jobData) && jobData.map((item,index) => (
                <tr>
                  <td scope="row">
                   {index + 1}
                  </td>
                  <td>
                  {item.title}
                  </td>
                  <td>
                    {item.country}
                  </td>
                  <td>
                    {item.state}
                  </td>
                  <td>
                    {item.city}
                  </td>
                  <td>
                    {item.description}
                  </td>
                  <td>
                    {item.experience}
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
    </div>
  )
}

export default PostJob