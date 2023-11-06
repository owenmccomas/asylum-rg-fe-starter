import React from 'react';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />

          <a className="btn btn-primary" href="/profile">
            Profile
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
