import React from 'react';

const Header = () => {
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="col-md-2">
            <div className="navbar-logo-box">
              <span className="logo-sm">
                <img src="/assets/images/logo.png" alt="logos" width={100} />
              </span>
            </div>
          </div>
          <div className="col-md-7">
            <div className="navbar-search-box">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-default waves-effect waves-light"
                      id="search-btn"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3">
            <div className="navbar-right-box d-flex align-items-center justify-content-center">



              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell" />
                  <span className="badge badge-danger">5</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-bell" /> Notification 1
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-bell" /> Notification 2
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-bell" /> Notification 3
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-envelope" />
                  <span className="badge badge-danger">5</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-envelope" /> Message 1
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-envelope" /> Message 2
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-envelope" /> Message 3
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="dropdown ps-3">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/images/users/avatar-5.png"
                    alt="user"
                    className="user-image"
                  />
                  <span className="user-name ps-2">Admin</span>
                  {/* <i className="fa fa-angle-down" /> */}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-user" /> Profile
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-cog" /> Settings
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-power-off" /> Logout
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
