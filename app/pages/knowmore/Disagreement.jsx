import React from "react";
import Main from "../../../public/assets/Cards/Data.svg";
import CEO from "../../../public/assets/Success/Brittany.jpeg";

import StateContext from "../../context/StateContext";
import CTA from "./CTA";
import Card from "./Card";
import Demoo from "./Demoo";

const Disagreement = () => {

    const { goToTop } = React.useContext(StateContext);

    React.useEffect(() => {
        goToTop();
    }
    ,[]);

  return (
    <div className="container-fluid fibre knowmore">
      {/* <Card id="4" /> */}
      <Demoo id={"4"} />

      <div className="container">
        <h1 className="ch h11 mt-5 pt-5">Enhance Collaboration 
        <br />
        and 
        Reduce Data Disagreement</h1>
        <p className="ch w-75">
        Foster team collaboration and reduce data disagreements with FIBER Platform. Discover how we empower your data pipeline management:
        </p>

        <div className="row py-5">
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Seamless Team Collaboration</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
            Collaborate effortlessly with your team to construct data pipelines, fostering a cohesive data-driven environment.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Semantics Layer</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
            Leverage our semantics layer to enhance data understanding among stakeholders and minimize redundant pipelines. Ensure everyone is on the same page.

            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Gitops Engine</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
            Stay in control of your projects with our Gitops engine for version control. From initial ideation to final implementation, track project progress with ease.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Efficient Data Pipeline Management:</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
            Achieve true collaboration and efficiency in data pipeline management, ensuring your projects run smoothly and cohesively.
            </p>
          </div>
        </div>
        <p className="ch">
        Experience the power of FIBER Platform in streamlining teamwork, enhancing data understanding, 
        <br />
        and making data pipeline management a breeze.
        </p>
       <CTA />
      </div>
    </div>
  );
};

export default Disagreement;
