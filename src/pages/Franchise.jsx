import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Franchise = () => {

  const [Fdata, setFData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/tt-expo-admin-be/unimaklerF/get.php");
        const result = await response.json();
        console.log(result);  // Check the structure of the response

        // If the result is an object with a `data` field, use result.data
        setFData(Array.isArray(result) ? result : result.data);  // Update Fdata if it's an array or from `result.data`
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

   // Handle delete
   const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost/tt-expo-admin-be/unimaklerF/delete.php?id=${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      if (result.success) {
        // Filter out the deleted item from the state
        setFData(fData.filter((item) => item.id !== id));
        alert("Item deleted successfully!");
      } else {
        alert(result.message || "Failed to delete the item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item.");
    }
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
                    <li className="breadcrumb-item active"> Masters</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>

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
                  <th>Name</th>
                  <th>Number</th>
                  <th>Gmail</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(Fdata) && Fdata.length > 0 ? (
                  Fdata.map((data, index) => (
                    <tr key={index}>
                      <td scope="row">{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.number}</td>
                      <td>{data.email}</td>
                      <td>{data.country}</td>
                      <td>{data.city}</td>
                      <td>{data.message}</td>
                      <td>
                        <button className="edt-icon"><FaEdit /></button>
                        <button className="dlete" onClick={() => handleDelete(data.id)}><MdDelete /></button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No data available.</td>
                  </tr>
                )}



              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Franchise