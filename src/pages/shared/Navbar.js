/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className=" mr-5 nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className=" mr-5 nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className=" mr-5 nav-link" href="#">
              Dental Services
            </a>
          </li>
          <li className="nav-item">
            <a className=" mr-5 nav-link text-white" href="#">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className=" mr-5 nav-link text-white" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className=" mr-5 nav-link text-white" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
