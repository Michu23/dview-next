    
"use client"
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Dview from "../public/assets/Lottie/DviewLogo.json";

const Header = () => {
  // const { openModal, setOpenModal } = useContext(StateContext);
  const [menuActive, setMenuActive] = React.useState(false);
  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };
  return (
    
    <div className="container-fluid header p-0 m-0 pt-2 pb-0 py-md-2">
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <Link to="/"
            className="d-flex justify-content-center align-items-center gap-2"
          >
            {/* <img src={Logo} alt="dview-logo" className="w-100" /> */}
            <Lottie animationData={Dview} />
          
          </Link>
        </div>
        <div className="d-none d-md-flex justify-content-center align-items-center gap-3">
          <a className="cp ch navs" href="/connectors">
            Integrations
          </a>
          <img src="./assets/Ellipse.svg" alt="" />
          <Link className="ch cp navs" to="/blog">
            Blogs
          </Link>
          <img src="./assets/Ellipse.svg" alt="" />
          <a className="ch cp navs" href="https://cloud.dview.io/" target="_blank" 
            rel="noopener noreferrer"
          >
            Platform
          </a>
          {/* <MySvg />

          <a
            className="cp ch navs"
            onClick={() => {
              setOpenModal(true);
              console.log(openModal);
            }}
          >
            Demo
          </a> */}
        </div>
        <div className="d-none d-md-flex justify-content-center align-items-center gap-2">
          <div className="connect d-flex align-items-center justify-content-center px-4 py-3 m-0">
            <Link to="/contact" className="navs cp ch ">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="d-md-none d-flex justify-content-center align-items-center gap-2">
          <div className="hamburger__mob">
            <div
              className={`menu-link ${menuActive ? "active" : ""}`}
              onClick={handleMenuClick}
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </div>
        </div>
      </div>
      {menuActive && (
        <div className="p-3">
          <div
            className="py-3"
            onClick={() => {
              setMenuActive(false);
            }}
          >
            <a className="navs cp ch " href="https://cloud.dview.io/" target="_blank"
              rel="noopener noreferrer"
            >
              Platform
            </a>
          </div>
          <div
            className="py-3"
            onClick={() => {
              setMenuActive(false);
            }}
          >
            <Link className="navs cp ch " to="/connectors">
              Integration
            </Link>
          </div>
          <div
            className="py-3 pb-4"
            onClick={() => {
              setMenuActive(false);
            }}
          >
            <Link className="navs cp ch " to="/blog">
              Blogs
            </Link>
          </div>
          <div className="connect mt-1 mb-4 d-flex align-items-center justify-content-center px-4 py-3 m-0">
            <Link to="/contact" className="navs cp ch ">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
