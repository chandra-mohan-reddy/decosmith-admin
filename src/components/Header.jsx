import React from 'react';

const Header = () => {
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="navbar-logo-box">
            <span className="logo-sm">
              <img src="/assets/images/logo.png" alt="logos" width={100} />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
