import React from "react";
import CTA from "./CTA";
import Demoo from "./Demoo";

const Fibercard = () => {

  return (
    <div className="container-fluid fibre knowmore m-0 p-0">

      {/* <Card id="0" /> */}
      <Demoo id={"0"} />

      <div className="container" id="scroll">
        <h1 className="ch h11 mt-5 pt-5">Know More About FIBER Platform</h1>
        <p className="ch w-75">
          Welcome to the future of data engineering with FIBER Platform. Our
          cutting-edge solution empowers you to take control of your data
          journey like never before. Dive deeper into what sets us apart:
        </p>

        <div className="row py-5">
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Unmatched Data Ingestion</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              With FIBER Platform, you can effortlessly connect and ingest data
              from over 100 sources in near real-time.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Intuitive No-Code UI</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Transforming your data into analytics-ready format is a breeze
              with our intuitive, no-code user interface. No more wrestling with
              complex code – just seamless data transformation.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Transparency & Trust</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Bid farewell to biased and black-box solutions. FIBER Platform is
              designed for transparency, allowing you to trust your data and the
              decisions you make based on it.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Zero Downtime</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Experience uninterrupted data operations with virtually zero
              downtime. Keep your business running smoothly and your data
              flowing consistently.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Unparalleled Automation</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Let our platform do the heavy lifting. Benefit from automation
              that simplifies your data processes and frees up your team's
              valuable time.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Minimal Maintenance</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Designed to minimize the need for ongoing upkeep, letting you
              concentrate on driving value from your data. Our platform is built
              for reliability, requiring minimal upkeep.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Streamlined Data Processes</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Harness the power of FIBER Platform to streamline and optimize
              your data processes, making data management more efficient than
              ever.
            </p>
          </div>
        </div>

        {/* <p className="ch">
          Ready to embark on a data journey that transforms the way you work
          with data?
          <br />
          Explore FIBER Platform and unlock the full potential of your data.
        </p> */}

        <CTA />
      </div>
    </div>
  );
};

export default Fibercard;
