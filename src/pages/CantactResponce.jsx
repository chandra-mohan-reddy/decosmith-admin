import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { enviromentUrl } from "../enviroment/enviromentVariable";
const ContactResponce = () =>{
  const [data, setData] = useState([]);

  const GetResponce = async () => {
    const url = `${enviromentUrl}/contact/get.php`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const fetchedData = await response.json();
    const GetData = fetchedData.response;

    setData(GetData);
  };
  useEffect(() => {
    GetResponce();
  }, []);


  console.log("Team us data is====", data);
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
                    <li className="breadcrumb-item active">Contact  Responses</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          </div>
    
          <div className='container'>
              {/* <div className='card p-4'>
                <h4 className='sect-title mb-4'>Add Responses</h4>
                <form>
    
                  <div className="row">
    
                    <div className="col-md-4">
                      <div className="form-floating mb-4">
                        <select className="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
                          <option value="default">Select</option>
                          <option value="default">India</option>
                          <option value="HMDA">Australia</option>
                        </select>
                        <label for="size-representation" className="fw-normal">Career Type *</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="form-floating">
                    <input type="text" className="form-control" name="name" placeholder="Builder Name" />
                    <label for="project-type" className="fw-normal">Name *</label>
                  </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                      <input type="email" className="form-control" name="name" placeholder="Builder Name" />
                      <label for="project-type" className="fw-normal">Email *</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="form-floating">
                    <input type="number" className="form-control" name="name" placeholder="Builder Name" />
                    <label for="project-type" className="fw-normal">Number *</label>
                  </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                      <input type="text" className="form-control" name="name" placeholder="Builder Name" />
                      <label for="project-type" className="fw-normal">Location *</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                      <input type="text" className="form-control" name="name" placeholder="Builder Name" />
                      <label for="project-type" className="fw-normal">CTC *</label>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div className="form-floating">
                      <input type="file" className="form-control" name="name" placeholder="Builder Name" />
                      <label for="project-type" className="fw-normal">Resume *</label>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4 ">
                      <div className="form-floating">
                      <input type="date" className="form-control" name="name" placeholder="Builder Name" />
                      <label for="project-type" className="fw-normal">Date *</label>
                      </div>
                    </div>
                  
    
                    <div className="row mt-4">
                      <div className="form-floating">
                        <button className="btn btn-primary" fdprocessedid="utrbwm">Submit</button></div></div>
                  </div>
    
                </form>
              </div> */}
              <div className="card p-4">
                <div className='row justify-content-between mb-4 align-items-center'>
                  <div className="col-md-9">
                    <h4 className='sect-title mb-0'>Responses List</h4>
                  </div>
                  <div className="col-md-3">
                    <input type='text' placeholder='Contry,State,City' className='form-control' />
                  </div>
    
                </div>
                <table id="empoloyees-tblwrapper" className="table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Array.isArray(data) && data.map((item, index) => (
                    <tr>
                      <td scope="row">
                        {index + 1}
                      </td>
                      <td>
                        {item.name}
                      </td>
                      <td>
                        {item.number}
                      </td>
                      <td>
                        {item.email}
                      </td>
                     <td>
                        {item.message}
                     </td>
                    
                      <td>
                        <a href="#"><button className='edt-icon'><FaEdit /></button></a>
                        <a href="#"><button className='dlete'><MdDelete /></button></a>
                      </td>
    
                    </tr>
                     ))
                    }
                  
    
                  </tbody>
    
                </table>
              </div>
            </div>
    
        </div>
      </div>
    )
}
export default ContactResponce