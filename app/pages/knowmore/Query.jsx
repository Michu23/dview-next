import React from "react";
import StateContext from "../../../context/StateContext";
import CTA from "./CTA";
import Demoo from "./Demoo";

const Query = () => {

  const { goToTop } = React.useContext(StateContext);
  React.useEffect(() => {
    goToTop();
  }, [goToTop]);

  return (
    <div className="container-fluid fibre knowmore">
      {/* <Card id="2" /> */}
      <Demoo id={"2"} />

      <div className="container">
        <h1 className="ch h11 mt-5 pt-5">
          Explore Our Auto-Scaling Query Engine
        </h1>
        <p className="ch w-75">
          Experience data query reliability like never before with FIBER
          Platform. Explore further to understand our unique features:
        </p>

        <div className="row py-5">
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Guaranteed Uptime</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              With FIBER Platform, data query downtime is a thing of the past.
              Our system ensures that your data is always available when you
              need it.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Autoscaling Query Engine</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Say hello to an autoscaling query engine that adapts to your
              needs. Whether you're handling increased loads or need to scale
              down, FIBER Platform has you covered.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Centralized Metrics Layer</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Unlock actionable insights with a centralized metrics layer that
              makes data consumption reliable and efficient.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Compute and Storage Separation</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
              Our innovative architecture separates compute and storage,
              maximizing efficiency and minimizing redundancy in your data
              operations.
            </p>
          </div>
        </div>

        <p className="ch">
          Discover the power of FIBER Platform's query engine, where uptime is
          guaranteed, scalability is effortless,
          <br />
          and data reliability is paramount.
        </p>

        <CTA />
      </div>
    </div>
  );
};

export default Query;
