"use client"

import React from "react";
import { Link } from "react-router-dom";
import StateContext from "../app/context/StateContext";

const Footer = () => {
  const { footerData } = React.useContext(StateContext);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container-fluid p-0 m-0 footer">
        <div className="footer1 container-fluid p-0 m-0 py-2">
          <div className="container">
            <div className="row mt-4 mb-5 ">
              <div className="col-12 col-md-7">
                {footerData ? (
                  <div className="ps-2">
                    <h2 className="ch pt-4">
                      Unlock Your Data's Full Potential
                      <br />
                      with FIBER Platform
                    </h2>
                    <p className="ch pt-2">
                      Dive into FIBER Platform for unmatched scalability,
                      top-tier security, and enhanced teamwork. Begin your
                      transformative data experience and harness true data
                      power.
                    </p>
                  </div>
                ) : (
                  <div className="pt-md-4 px-2 px-md-0">
                    <h2 className="ch pt-4">
                      Streamline Your
                      <br />
                      Data Processes
                    </h2>
                  </div>
                )}
              </div>
              <div className="col-12 col-md-5 pe-2">
                <div className="w-100 pe-md-5 pe-3 pt-4">
                  {footerData ? (
                    <>
                      <div className="d-flex justify-content-end">
                        <div className="ceo">
                          <img
                            src="https://media.licdn.com/dms/image/D5603AQFk3Q3Jgzy75Q/profile-displayphoto-shrink_800_800/0/1698249125584?e=1703721600&v=beta&t=f2kBrTdwmCXlFQVxq13udH14-Oz-09pgpXA_WzrkZjc"
                            alt=""
                          />
                          <div className="ratinginfo">
                            <h6 className="ratingname">Supratik Shankar</h6>
                            <p className="ratingrole">Co-Founder, Dview</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-100 d-flex justify-content-end pe-md-5 pe-0 pt-md-4 ">
                        <a
                          href="https://calendly.com/supratik-dview"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="connect ms-5 px-4 p-2 mt-3">
                            <p className="ch m-0">Book a Call</p>
                          </button>
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="ch p2 mb-4 mb-md-3 px-2 p-md-0">
                        Contact us today to learn more about our data management
                        solutions & start optimizing your data workflows.
                      </p>
                      <a
                        href="https://calendly.com/dview-surya"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="button px-5 py-3 text-dark">
                          <b>Book a Call</b>
                        </button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer2  conatiner-fluid p-0 m-0 py-5">
          <div className="container">
            <div className="w-100 row">
              <div className="col-12 col-md-5">
                <div className="">
                  <div className="logo">
                    <img
                      src='./assets/logo.svg'
                      alt=""
                      className="cp"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    />
                  </div>
                  <div>
                    <b>
                      <p
                        className="p2"
                        style={{ color: "#6587e5", fontWeight: "700" }}
                      >
                        Lead with Data
                      </p>
                       
                    </b>
                    <div className="d-flex gap-2">
                       <Link to="https://in.linkedin.com/company/dview-io">
                      <p>
                        <svg
                          fill="#fff"
                          height="24px"
                          width="24px"
                          version="1.1"
                          style={{
                            paddingRight: "10px",
                            marginTop: "-7px",
                          }}
                          id="Layer_1"
                          viewBox="0 0 310 310"
                          stroke="#ffffff"
                        >
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g id="XMLID_801_">
                              <path
                                id="XMLID_802_"
                                d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                              ></path>
                              <path
                                id="XMLID_803_"
                                d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                              ></path>
                              <path
                                id="XMLID_804_"
                                d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <b className="text-light m-0 p-0">LinkedIn</b>
                      </p>
                    </Link>
                       <Link to="https://twitter.com/DviewTech">
                      <p>
                      <img style={{
                        marginTop: "-6px",
                      }} width="19" height="19"
                        className="me-1"
                      src='./assets/Icons/icons8-twitter-24.png' alt="twitterx--v2"/>
                        <b className="text-light m-0 p-0">Twitter</b>
                      </p>
                    </Link>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 pt-4">
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-6 col-md-4 text-white pb-4">
                    <div className="text-white">
                      <b>Address</b> 
                      <div className="pt-2 mt1 op-5">
                        <a
                         href="https://maps.app.goo.gl/S7MdwB2y5g6hvhVz7"
                          className="text-white mt-2"
                          style={{
                            lineHeight: "1.9",
                          }}
                        >
                          4th floor, #14 MNR Pride
                          <br />
                          Domlur - 560071
                          <br />
                          Bangalore, India
                        </a>
                      </div>
                    
              
                    </div>
                  </div>
                  <div className="col-6 col-md-3 text-white">
                    <div className="text-white">
                      <b>Company</b>
                      <div className="pt-3 op-5">
                        <Link
                          onClick={goToTop}
                          to="/team"
                          className="text-white mt-2"
                        >
                          Team
                        </Link>
                      </div>
                      <div className="pt-2 op-5">
                        <Link
                          onClick={goToTop}
                          to="/blog"
                          className="text-white mt-2"
                        >
                          Blog
                        </Link>
                      </div>
                      <div className="pt-2 op-5">
                        <Link
                          to="/faqs"
                          onClick={goToTop}
                          className="text-white mt-2"
                        >
                          FAQs
                        </Link>
                      </div>
                      <div className="pt-2 op-5">
                        <Link
                          onClick={goToTop}
                          to="/news"
                          className="text-white mt-2"
                        >
                          News
                        </Link>
                      </div>
                      <div className="pt-2 op-5">
                        <Link
                          onClick={goToTop}
                          to="/whitepaper"
                          className="text-white mt-2"
                        >
                          White Paper
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 pt-4 pt-md-0 text-white">
                    <div className="text-white">
                      <b>Platform</b>
                      <div className="pt-3 op-5 ">
                        <Link
                          onClick={goToTop}
                          to="/fibre"
                          className="text-white mt-2"
                        >
                          Fiber Platform
                        </Link>
                      </div>
                      <div className="pt-2 op-5 ">
                        <Link
                          onClick={goToTop}
                          to="/data"
                          className="text-white mt-2"
                        >
                          Centralize Data
                        </Link>
                      </div>
                      <div className="pt-2 op-5 ">
                        <Link
                          to="/query"
                          onClick={goToTop}
                          className="text-white mt-2"
                        >
                          Query Engine
                        </Link>
                      </div>
                      <div className="pt-2 op-5 ">
                        <Link
                          onClick={goToTop}
                          to="/security"
                          className="text-white mt-2"
                        >
                          Data Security
                        </Link>
                      </div>
                      <div className="pt-2 op-5 ">
                        <Link
                          onClick={goToTop}
                          to="/disagreement"
                          className="text-white mt-2"
                        >
                          Team Collaboration
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-block pt-4 pt-md-0 d-md-none">
                    <div className="text-white">
                      <b>Policies</b>
                      <div className="pt-3 op-5">
                        <Link
                          href="/terms"
                          className="text-white mt-2"
                        >
                          Terms of Service
                        </Link>
                      </div>
                      <div className="pt-2 op-5">
                        <Link
                          to="/privacy"
                          className="text-white mt-2"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                      <div className="pt-2 op-5">
                        <Link
                          to="/cookies"
                          className="text-white mt-2"
                        >
                          Cookie Policy
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer3 container-fluid p-0 m-0 py-1 bg-light">
          <div className="container d-flex justify-content-between py-1">
            <p className="p1">© 2023 Dview Inc. All rights reserved.</p>
            <div>
              <div className="d-flex gap-4 d-none d-md-flex">
                <Link to="/terms" className="text-dark">
                <p className="p1">Terms of Service</p>
                </Link>
                <Link to="/privacy" className="text-dark">
                <p className="p1">Privacy Policy</p>
                </Link>
                <Link to="/cookies" className="text-dark">
                <p className="p1">Cookie Policy</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
