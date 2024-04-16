import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      {/* Container for the navbar */}
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand text-info" href="#">
          Lazyloading
        </a>
        {/* Navbar Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home Link */}
            <li className="nav-item">
              <Link className="nav-link text-info" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {/* Product Link */}
            <li className="nav-item">
              <Link className="nav-link text-info" to="/product">
                Product
              </Link>
            </li>
         
          
          </ul>
          {/* Search Form */}
          <form className="d-flex">
            {/* Search Input */}
            <input
              className="form-control me-2 text-info"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* Search Button */}
            <button className="btn btn-outline-success text-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
      
    </>
  )
}

export default Header
