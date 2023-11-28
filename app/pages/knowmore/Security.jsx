import React from "react";
import StateContext from "../../context/StateContext";
import CTA from "./CTA";
import Demoo from "./Demoo";

const Security = () => {


    const { goToTop } = React.useContext(StateContext);

    React.useEffect(() => {
        goToTop();
    }
    ,[goToTop]);

  return (
    <div className="container-fluid fibre knowmore">
      {/* <Card id="3" /> */}
      <Demoo id={"3"} />


      <div className="container">
        <h1 className="ch h11 mt-5 pt-5">Prioritize Data Security</h1>
        <p className="ch w-75">
        At FIBER Platform, data security is our top priority. Explore how we safeguard your data:

        </p>

        <div className="row py-5">
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Dedicated VPC Deployment:</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
            Enhance data security with a dedicated Virtual Private Cloud (VPC) deployment tailored to your unique requirements. Your data, your control.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Role-Based Access Control (RBAC)</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
            Implement Role-Based Access Control to manage team access effectively, ensuring that the right people have the right level of access to your data.
            </p>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-4  ps-md-4">
            <h5 className="ch">
              <b>Data Protection Measures</b>
            </h5>
          </div>
          <div className="col-12 col-md-8 pe-4">
            <p className="ch ">
            We go the extra mile to safeguard your data. Our platform includes features like data masking and anonymization to protect against data breaches and maintain privacy.
            </p>
          </div>
        </div>
        <p className="ch">
        Discover how FIBER Platform prioritizes data security to streamline your data flows while 
        <br />
        keeping your information safe and confidential.
        </p>
       <CTA />
      </div>
    </div>
  );
};

export default Security;
