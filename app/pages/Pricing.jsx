import React from "react";
import PricingTable from "../../components/Pricing/PricingTable";
import { Link } from "react-router-dom";
import FAQs from "./FAQs";
import Success from "../../components/Home/Success";
import ReactGA from "react-ga4";

const Pricing = () => {

  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/pricing",
      title: "Pricing Page",
    });
  }, []);


  return (
    <div className="container-fluid p-0 pricing">
      <div className="container mt10">
        <h1 className="ch h11 text-center">
          Curated plan created
          <br />
          for your business
        </h1>
        <div className="d-flex justify-content-center text-center w-100">
          <p className="text-center w-75 ch3 py-3">
            Explore Dview's pricing plans for our comprehensive data engineering
            platform. Find the perfect fit for your business needs, whether
            you're a startup or an industry leader. Get started on your
            data-driven journey today.
          </p>
        </div>
      <PricingTable/>
      </div>
      <div className="container cards p-5 mb-3">
        <div className="row">
            <div className="col-12 col-md-6">
                <h3 className="ch">
                Can’t find a plan that suits you? 
                </h3>
                <p className="ch">
                Talk to our Sales team to find a plan that will work best for you. 
We offer custom plans for certain types of companies, like enterprises, marketing agencies, 
or portfolio aggregators.
                </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end">
            <Link className="text-white ">
                      <div className={`connect p1 py-2 my-3 mx-2 px-4 mt-4 d-flex justify-content-center`}>
                        Contact Sales
                      </div>
                    </Link>
            </div>
        </div>
      </div>
      <FAQs/>
      <div className="cards">

      <Success/>

      </div>
    </div>
  );
};

export default Pricing;
