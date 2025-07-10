import React, { useEffect, useState, useMemo } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { apiClient } from "../utils/httpClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactResponse = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchResponses = async () => {
    try {
      const res = await apiClient.get('/submissions');
      if (res.data?.status) {
        setData(res.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching contact responses:", error);
      alert("Error getting contact responses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!search) return data;

    const lowerSearch = search.toLowerCase();
    return data.filter(item => {
      return (
        (item.name && item.name.toLowerCase().includes(lowerSearch)) ||
        (item.mobile && item.mobile.includes(search)) ||
        (item.email && item.email.toLowerCase().includes(lowerSearch)) ||
        (item.message && item.message.toLowerCase().includes(lowerSearch))
      );
    });
  }, [data, search]);

  const deleteSubmission = async (id) => {

    try {
      const response = await apiClient.delete(`/submissions/${id}`);
      if (response.data?.status == 200) {
        setData(data.filter((item) => item.id !== id));
        toast.success("Form submitted successfully!");
      } else {
        toast.error(response.data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Error deleting response:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "An error occurred while submitting the form";
      toast.error(errorMsg);
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
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active"> Responses</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 mt-4">
            <div className="row justify-content-between mb-4 align-items-center">
              <div className="col-md-9">
                <h4 className="sect-title mb-0">Responses List</h4>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  placeholder="Search responses..."
                  className="form-control"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {loading ? (
              <div className="text-center py-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? (
                      filteredData.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.mobile}</td>
                          <td>{item.email}</td>
                          <td>
                            {item.message && item.message.length > 50
                              ? `${item.message.substring(0, 50)}...`
                              : item.message}
                          </td>
                          <td>
                            <div className="d-flex">
                              <button className="btn btn-sm btn-warning me-2">
                                <FaEdit />
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => deleteSubmission(item.id)}
                              >
                                <MdDelete />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          {data.length === 0
                            ? "No responses found"
                            : "No matching responses found"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactResponse;