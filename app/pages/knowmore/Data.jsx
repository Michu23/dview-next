import React from "react";


import StateContext from "../../context/StateContext";
import CTA from "./CTA";
// import Card from "./Card";
import Demoo from "./Demoo";

const Data = () => {
  const { goToTop } = React.useContext(StateContext);

  React.useEffect(() => {
    goToTop();
  }, [goToTop]);

  return (
    <div className="container-fluid fibre knowmore">
      {/* <Card id={"1"} /> */}
      <Demoo id={"1"} />

      <div className="container">
        <h1 className="ch h11 mt-5 pt-5">Know More About Our Data Centralization</h1>
        <p className="ch w-75">
          Embrace effortless data centralization and streamlined management with
          FIBER Platform. Dive deeper into what sets us apart:
        </p>

        <div className="row py-5">
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Uniting Data Silos</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Embrace the Lakehouse Revolution, where data lakes and data
              warehouses converge. This enables you to create a single, unified
              source of truth for your organization's data.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Single-Copy Architecture</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Our innovative single-copy architecture empowers lightning-fast
              analytical queries, ensuring that you have immediate access to the
              insights you need.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Interoperability</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              FIBER Platform's open storage formats facilitate seamless
              interoperability across your entire data ecosystem, making data
              sharing and collaboration a breeze.
            </p>
          </div>
        </div>

        <p className="ch">
          Discover the power of FIBER Platform to centralize your data,
          accelerate analytics, and foster collaboration across your
          organization.
          <br />
          Experience the future of data management today.
        </p>

        <CTA />
      </div>
    </div>
  );
};

export default Data;
