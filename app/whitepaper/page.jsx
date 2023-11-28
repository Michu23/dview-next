import React from "react";
import Form from "./Form";
import StateContext from "../context/StateContext";

import DA1 from "../../public/assets/WhitePaper/DA1.jpg";
import DB1 from "../../public/assets/WhitePaper/DB1.jpg";

import ReactGA from "react-ga4";

const WhitePaper = () => {
  const { clicked, setClicked } = React.useContext(StateContext);

  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/whitepaper",
      title: "White Paper Page",
    });
  }, []);


  return (
    <div className="container-fluid p-0 whitepaper">
      <div
        className="container mt10"
        style={{
          maxWidth: "800px",
        }}
      >
        <h1 className="ch h11 mb-1">
          Transforming Data Engineering with Dview : White Paper
        </h1>

      
      
        <div className="container mt-1">
          <div className="row pt-5 p-0">
            <div className="col-12 col-md-6 p-0 pe-2 pb-5">
              <h3 className="ch">White Paper 1</h3>
              <img src={DA1} className="img-fluid fade-image" alt="" />
              {/* <img src={DA2} className="img-fluid fade-image" alt="" /> */}
              <div className="connect d-flex justify-content-center py-2 ch mx-3 mt-3"
              onClick={() => setClicked("1")}
              >
                <a className="ch m-0"
                    href="#scroll"
                > 
                <b>
                Download
                </b>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0 ps-2">
              <h3 className="ch">White Paper 2</h3>
              <img src={DB1} className="img-fluid fade-image" alt="" />
              {/* <img src={DB2} className="img-fluid fade-image" alt="" /> */}
              <div className="connect d-flex justify-content-center py-2 ch mx-3 mt-3"
              onClick={() => setClicked("1")}
              >
                <a className="ch m-0"
                href="#scroll"
                > 
                <b>

                Download
                </b>
                
                </a>
              </div>
            </div>
          </div>
        </div>

      

        <h3 className="text-mycolor mt-5">Highlights of the White Paper</h3>
        <p className="text-mycolor pt-2 text-justify">
          In this white paper, we'll journey through Dview's data engineering
          platform, its capabilities, innovations, and the transformative impact
          it can have on businesses. Whether you're a seasoned data scientist, a
          business leader, or someone curious about the future of data, this
          exploration with Dview promises to be enlightening.
          <br />
          <br />
          In today's data-driven landscape, organizations require robust
          platforms to handle, process, and interpret vast amounts of
          information. Dview's data engineering platform is the answer for
          modern businesses looking for a scalable and efficient tool to harness
          their data's potential.
          <br />
          <br />
          This white paper offers a deep dive into Dview's platform, showcasing
          its core capabilities, standout features, and the innovative
          technology behind it. By grasping Dview's vision of data engineering,
          organizations can better shape their data management tactics and make
          more enlightened decisions.
        </p>

        <ol className="text-mycolor ps-3 pe-0  text-justify ">
          <li className="pt-1">
            <h6 className=" mt-5 d-inline">
              <b>Understanding Modern Data Engineering</b>
            </h6>
            : Insights into the essentials of data processing, transformation,
            and integration in the contemporary era.
          </li>
          <li className="pt-1">
            <h6 className=" mt-5 d-inline">
              <b>Dview's Unique Offerings</b>
            </h6>
            : A detailed overview of what sets our platform apart in the crowded
            market landscape.
          </li>
          <li className="pt-1">
            <h6 className=" mt-5 d-inline">
              <b>Real-world Successes</b>
            </h6>
            : Case studies spotlighting businesses that have utilised Dview for
            impressive results.
          </li>
          <li className="pt-1">
            <h6 className=" mt-5 d-inline" id="scroll">
              <b>The Road Ahead in Data Engineering</b>
            </h6>
            : A look into the future of data engineering and how Dview is
            spearheading this evolution.
          </li>
        </ol>


        {clicked === "0" && (
          <div className="cards my-5 py-5 px-md-5 px-3">
            <div className="row">
              <div className="col-12 col-md-9 pe-5">
                <h3 className="ch">Download White Paper</h3>
                <p className="ch ">
                  Eager to explore the nuances of top-tier data engineering?
                  Secure your copy of Dview's comprehensive white paper.
                </p>
              </div>
              <div className="col-12 col-md-3 d-flex justify-content-end">
                <div
                  className={`connect text-mycolor p1 py-2 my-3 mx-2 px-5 mt-4 d-flex justify-content-center`}
                  onClick={() => setClicked("1")}
                >
                  Download
                </div>
              </div>
            </div>
          </div>
        )}

        {clicked === "1" && (
          <div className="cards  my-5 py-5 px-md-5 px-3">
            <div className="row">
              <div className="col-12 col-md-6">
                <h3 className="ch">Access White Paper</h3>
                <p className="ch">
                  Kindly provide the following information to receive instant
                  access to Dview's enlightening white paper.
                </p>
                <img
                  src="https://i.ibb.co/qNw0xr7/Data-Lake-vs-Data-Warehouse-Art.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end">
                <Form clicked={clicked} setClicked={setClicked} />
              </div>
            </div>
          </div>
        )}

        {clicked === "2" && (
          <div className="cards py-5 px-4">
            <div className="row">
              <div className="col-12 col-md-12">
                <h3 className="ch">Thankyou for reaching out</h3>
                <p className="ch">
                  You can download the White Paper from the links below.
                </p>
              </div>
              <div className="col-12 col-md-12 d-flex justify-content-start">
                <div className="d-flex">
                  <a
                    href="https://dview-web.s3.ap-south-1.amazonaws.com/dview-ui/Dview+-+Near+real+time+analytics+-+white+paper+(1).pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white "
                  >
                    <div
                      className={`connect p1 py-2 my-3 mx-2 px-4 d-flex justify-content-center`}
                    >
                      White Paper 1
                    </div>
                  </a>
                  <a
                    href="https://dview-web.s3.ap-south-1.amazonaws.com/dview-ui/Dview+-+Neobank+ingestion+-+White+Paper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white "
                  >
                    <div
                      className={`connect p1 py-2 my-3 mx-2 px-4 d-flex justify-content-center`}
                    >
                      White Paper 2
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhitePaper;
