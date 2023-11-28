"use client"
import React from "react";
import Banner from "../../components/Home/Banner";
import Companies from "../../components/Companies";
import Grid from "../../public/assets/Maskgroup.svg";
import Cards from "../../components/Home/Cards";
import Lake from "../../components/Home/Lake";
import Pipeline from "../../components/Home/Pipeline";
import Success from "../../components/Home/Success";

import StateContext from "../../context/StateContext";
import ReactGA from "react-ga4";

const Home = () => {

  const { footerData, setFooterData } = React.useContext(StateContext);

  React.useEffect(() => {
    setFooterData(true);

    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home Page",
    });

    return () => {
      setFooterData(false);
      console.log("Footer data set to false");
      console.log(footerData);
    };
  }, [footerData]);

  

  return (
    <div className="container-fluid home p-0 m-0">
      <div className="container banner text-center pt-5">
        <h1 className="ch pt-md-5 mt-5">
          Unlock The Value Of Your Data
          <br />
          at
          <span className="cs px-1">10x Price Performance Advantage</span>
        </h1>
        <div className="d-flex justify-content-center text-center w-100">
          <p className="text-center w-75 ch3 p1 py-3">
            <b>
              Our platform centralizes all your data into one place and offers
              easy access for data consumers.
              <br className="d-none d-md-block" />
              With an open architecture, it ensures faster, reliable, and
              scalable data analytics.
            </b>
          </p>
        </div>
      </div>

      <Banner />

      {/* <div className="container w-100 w-md-25 px-5">
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-7 col-md-3">
            <div className="button mt-5 py-3 d-flex justify-content-center">
              Get Started
            </div>
          </div>
        </div>
      </div> */}

      <div className="py-md-5 py-3"></div>

      <Companies />

      <img src="./assets/Maskgroup.svg" className="banner__img op-5" alt="" />

      <Cards />
      <Lake />
      <Pipeline />
      <Success />
      {/* <FAQs/> */}
    </div>
  );
};

export default Home;
