import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Profile = () => {
  return (
    <div className="main-content">
    <div className="page-content">
      <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active"> About Us</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
   
      </div>
      <div className='container'>
      <div className='card p-4'>
      <h4 className='sect-title mb-4'>Add About us Content</h4>
      <form>  
    
  <div class="row">
 
    <div class="col-md-4">
      <div class="form-floating mb-4">
        <select class="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
          <option value="default">Select</option>
          <option value="default">India</option>
          <option value="HMDA">Australia</option>
        </select>
        <label for="size-representation" class="fw-normal">Select Country*</label>
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-floating">
        <select class="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
          <option value="default">Select</option>
          <option value="HMDA">Telangana</option>
          <option value="HMDA">Bangalore</option>
        </select>
        <label for="size-representation" class="fw-normal">Select State* </label>
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-floating">
        <select class="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
          <option value="default">Select</option>
          <option value="default">India</option>
          <option value="HMDA">Australia</option>
        </select>
        <label for="size-representation" class="fw-normal">Select City*</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-floating">
        <select class="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
          <option value="default">Select</option>
          <option value="default">India</option>
          <option value="HMDA">Australia</option>
        </select>
        <label for="size-representation" class="fw-normal">Project Placement*</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-floating">
        <select class="form-select" name="approval_authority" required="" fdprocessedid="bmlidh">
          <option value="default">Select</option>
          <option value="HMDA">Telangana</option>
          <option value="HMDA">Bangalore</option>
        </select>
        <label for="size-representation" class="fw-normal">Select Project* </label>
      </div>
    </div>
{/* 
    <div class="col-md-4">
    
    <div class="form-floating">
      <input type="text" class="form-control" name="name" placeholder="Builder Name" value="" />
      <label for="project-type" class="fw-normal">Select State*</label>
    </div>
  </div> */}

<div class="row mt-4">
  <div class="form-floating">
    <button class="btn btn-primary" fdprocessedid="utrbwm">Submit</button></div></div>
  </div>

</form>
</div>  
<div className="card mt-4 p-4">
  <div className='row justify-content-between mb-4 align-items-center'>
<div className="col-md-9">
<h4 className='sect-title mb-0'>About us Content</h4>
</div>
<div className="col-md-3">
<input type='text' placeholder='Contry,State,City' className='form-control' />
</div>

</div>
</div>
      </div>
    </div>
  </div>
  )
}

export default Profile