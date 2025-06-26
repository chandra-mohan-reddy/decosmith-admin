import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Masters = () =>{
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
                <li className="breadcrumb-item active"> Masters</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='container'>
          <div className='card p-4'>
            <h4 className='sect-title mb-4'>Add Masters</h4>
            <form>

              <div className="row">

                <div className="col-md-4">
                  <div className="form-floating mb-4">
                    <select className="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
                      <option value="default">Select</option>
                      <option value="default">India</option>
                      <option value="HMDA">Australia</option>
                    </select>
                    <label for="size-representation" className="fw-normal">Select Country*</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <select className="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
                      <option value="default">Select</option>
                      <option value="HMDA">Telangana</option>
                      <option value="HMDA">Bangalore</option>
                    </select>
                    <label for="size-representation" className="fw-normal">Select State* </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating">
                    <select className="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
                      <option value="default">Select</option>
                      <option value="default">India</option>
                      <option value="HMDA">Australia</option>
                    </select>
                    <label for="size-representation" className="fw-normal">Select City*</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
                      <option value="default">Select</option>
                      <option value="default">India</option>
                      <option value="HMDA">Australia</option>
                    </select>
                    <label for="size-representation" className="fw-normal">Project Placement*</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
                      <option value="default">Select</option>
                      <option value="HMDA">Telangana</option>
                      <option value="HMDA">Bangalore</option>
                    </select>
                    <label for="size-representation" className="fw-normal">Select Project* </label>
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
                    <button className="btn btn-primary" fdprocessedid="utrbwm">Submit</button></div></div>
              </div>

            </form>
          </div>
          <div className="card mt-4 p-4">
            <div className='row justify-content-between mb-4 align-items-center'>
              <div className="col-md-9">
                <h4 className='sect-title mb-0'>Masters List</h4>
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
export default Masters