import React, { useState } from "react";
import logo from "../assets/images/Navbar/logo.png";
import {
  FaUser,
  FaSearch,
  FaShoppingCart,
  FaChevronDown,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Utility/Button";
const Modal = ({ show, onClose }) => {
  const navigate = useNavigate(); 

  const handleShopNowClick = () => {
    navigate("/home"); 
    onClose(); 
  };

  return (
    <div className={`modal ${show ? "show" : ""}`} style={{ display: show ? "block" : "none" }}>
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          <FaTimes />
        </button>
        <h4>Are you in the right place?</h4>
        <p>Please select your shipping country.</p>
        <p>
          Buy from the country of your choice. Remember that we can only ship your order to addresses located in the chosen country.
        </p>
        <label htmlFor="country">Country</label>
        <div className="input-wrapper">
          <input type="text" id="Pakistan" placeholder="Enter your country" />
          <FaChevronDown className="ms-2" />
        </div>
        <div className="shop-button">
          <Button text="Shop Now" onClick={handleShopNowClick} />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebarAndNavigate = (path) => {
    setSidebarOpen(false);
    navigate(path);
  };

  const openModal = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${isSidebarOpen ? "navbar-black" : ""}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
          aria-controls="navbarNav"
          aria-expanded={isSidebarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isSidebarOpen ? (
            <FaTimes className="close-icon" />
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div className="navbar-left">
          <Link to={""} className="navbar-brand">Menu</Link>
        </div>
        <div className="navbar-center">
          <Link to={""} className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className={`collapse navbar-collapse ${isSidebarOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link onClick={openModal} className="nav-link pakistan-link d-flex align-items-center">
                Pakistan <FaChevronDown className="ms-2" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link"><FaUser /></Link>
            </li>
            <li className="nav-item">
              <Link to={"/search"} className="nav-link"><FaSearch /></Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link"><FaShoppingCart /></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/Delia-Fall-Winter" onClick={() => closeSidebarAndNavigate("/Delia-Fall-Winter'24")}>
              Delia Fall Winter'24
            </Link>
          </li>
          <hr className="custom-hr" />
          <li>
            <Link to="/Velvet" className="velvet-link" onClick={() => closeSidebarAndNavigate("/Velvet")}>
              Velvet<span className="star-icon">★</span>
            </Link>
          </li>
          <hr className="custom-hr" />
          <li>
            <Link to="/Unstitched-Winter" onClick={() => closeSidebarAndNavigate("/Unstitched-Winter")}>
              Unstitched Winter
            </Link>
          </li>
          <hr className="custom-hr" />
          <li>
            <Link to="/Ready-to-wear" onClick={() => closeSidebarAndNavigate("/Ready-to-wear")}>
              Ready to wear
            </Link>
          </li>
          <hr className="custom-hr" />
          <li>
            <Link to="/Formals" onClick={() => closeSidebarAndNavigate("/Formals")}>
              Formals
            </Link>
          </li>
          <hr className="custom-hr" />
          <li>
            <Link to="/Sale" onClick={() => closeSidebarAndNavigate("/Sale")}>
              Sale
            </Link>
          </li>
        </ul>
        <div className="social-icons">
          <Link to="https://www.facebook.com/jazminonline"><FaFacebookF /></Link>
          <Link to="https://www.instagram.com/jazminonline/"><FaInstagram /></Link>
          <Link to="https://www.youtube.com/channel/UCW_TvIVtH8DBcR3IuztkeOA"><FaYoutube /></Link>
          <Link to="https://www.tiktok.com/@jazminonline"><FaTiktok /></Link>
          <Link to="https://www.linkedin.com/company/102874888"><FaLinkedin /></Link>
          <Link to="https://api.whatsapp.com/send/?phone=923484848914&text&type=phone_number&app_absent=0"><FaWhatsapp /></Link>
        </div>
        <hr />
        <Link onClick={openModal} className="nav-link pakistan-link d-flex align-items-center">
          Pakistan <FaChevronDown className="ms-2" />
        </Link>
      </div>
      <Modal show={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
